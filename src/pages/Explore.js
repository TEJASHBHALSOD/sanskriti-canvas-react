const MAP_DATA_URL = 'https://raw.githubusercontent.com/AbhinavSwami28/india-official-geojson/main/india-states-simplified.geojson';

const stateInfo = {
    Gujarat: { text: 'Heritage, stepwells, temples, crafts and vibrant festivals.', page: 'gujarat.html', places: [['🏛️', 'Modhera Sun Temple', 'Heritage'], ['🕌', 'Adalaj Stepwell', 'Architecture'], ['🛕', 'Somnath Temple', 'Temple Heritage']] },
    Rajasthan: { places: [['🏰', 'Hawa Mahal', 'Palace'], ['🏯', 'Amber Fort', 'Fort'], ['🏜️', 'Jaisalmer Fort', 'Heritage']] },
    Maharashtra: { places: [['🏛️', 'Gateway of India', 'Monument'], ['🪨', 'Ajanta Caves', 'Cave Heritage'], ['🏰', 'Raigad Fort', 'Fort']] },
    'Uttar Pradesh': { places: [['🕌', 'Taj Mahal', 'World Heritage'], ['🕌', 'Agra Fort', 'Fort'], ['🛕', 'Sarnath', 'Buddhist Heritage']] },
    'Madhya Pradesh': { places: [['🛕', 'Khajuraho Temples', 'Temple Heritage'], ['🏛️', 'Sanchi Stupa', 'Buddhist Heritage'], ['🏰', 'Gwalior Fort', 'Fort']] },
    'Tamil Nadu': { places: [['🛕', 'Brihadisvara Temple', 'Temple Heritage'], ['🛕', 'Meenakshi Temple', 'Temple Heritage'], ['🏛️', 'Mahabalipuram', 'World Heritage']] },
    Karnataka: { places: [['🏛️', 'Hampi', 'World Heritage'], ['🛕', 'Mysore Palace', 'Palace'], ['🏛️', 'Pattadakal', 'Temple Heritage']] },
    Odisha: { places: [['🛕', 'Konark Sun Temple', 'World Heritage'], ['🛕', 'Jagannath Temple', 'Temple Heritage'], ['🏛️', 'Udayagiri Caves', 'Heritage']] },
    Kerala: { places: [['🛶', 'Alappuzha Backwaters', 'Living Culture'], ['🏛️', 'Mattancherry Palace', 'Heritage'], ['🎭', 'Kathakali', 'Performing Art']] },
    'West Bengal': { places: [['🏛️', 'Victoria Memorial', 'Monument'], ['🏛️', 'Darjeeling Himalayan Railway', 'Rail Heritage'], ['🛕', 'Dakshineswar Temple', 'Temple Heritage']] },
    'Andhra Pradesh': { places: [['🛕', 'Tirupati Temple', 'Temple Heritage'], ['🪨', 'Lepakshi', 'Temple Heritage'], ['🏛️', 'Amaravati', 'Heritage']] },
    Telangana: { places: [['🏰', 'Charminar', 'Monument'], ['🏰', 'Golconda Fort', 'Fort'], ['🏛️', 'Qutb Shahi Tombs', 'Heritage']] },
    Punjab: { places: [['🛕', 'Golden Temple', 'Religious Heritage'], ['🏰', 'Jallianwala Bagh', 'Historic Site'], ['🏛️', 'Qila Mubarak', 'Fort Heritage']] },
    Bihar: { places: [['🛕', 'Mahabodhi Temple', 'World Heritage'], ['🏛️', 'Nalanda', 'Ancient Heritage'], ['🏛️', 'Rajgir', 'Historical Site']] },
    Goa: { places: [['⛪', 'Basilica of Bom Jesus', 'World Heritage'], ['⛪', 'Se Cathedral', 'Heritage'], ['🏖️', 'Old Goa', 'Cultural Heritage']] }
};

const svg = d3.select('#indiaMap'), width = 900, height = 650;
svg.attr('viewBox', `0 0 ${width} ${height}`);
const root = svg.append('g');
let zoom, selectedPath = null;

function getStateName(feature) {
    const p = feature.properties || {};
    return String(p.ST_NM || p.STNAME || p.State_Name || p.state_name || p.NAME_1 || p.name || p.NAME || p.st_nm || 'Unknown State').trim();
}
function getInfo(name) { return stateInfo[name] || { places: [['🏛️', 'Local Heritage', 'Heritage'], ['🎨', 'Regional Culture', 'Culture'], ['🍲', 'Traditional Food', 'Food']] }; }
function showPreview(name) {
    const info = getInfo(name);
    document.getElementById('featuredPreview').classList.add('active');
    document.getElementById('featuredKicker').textContent = 'Famous Places';
    document.getElementById('featuredTitle').textContent = name;
    const list = document.getElementById('famousList');
    list.innerHTML = info.places.map((p, i) => {
        const href = (name === 'Gujarat' && i === 0) ? 'gujarat.html' : (name === 'Gujarat' && i === 1) ? 'heritage-detail.html?place=adalaj-stepwell' : (name === 'Gujarat' && i === 2) ? 'heritage-detail.html?place=somnath-temple' : '#';
        const cls = href === '#' ? 'famous-card' : 'famous-card';
        return `<a class="${cls}" href="${href}" ${href === '#' ? 'onclick="return false"' : ''}><div class="famous-icon">${p[0]}</div><div><div class="famous-name">${p[1]}</div><div class="famous-type">${p[2]}</div></div></a>`;
    }).join('');
}
function selectState(path, name) { if (selectedPath) selectedPath.classed('selected', false); selectedPath = path; path.classed('selected', true); showPreview(name); }

async function loadMap() {
    try {
        const geo = await d3.json(MAP_DATA_URL), features = geo.features || [];
        if (!features.length) throw new Error('No state features found');
        const projection = d3.geoMercator().fitExtent([[28, 28], [width - 28, height - 28]], geo), pathGenerator = d3.geoPath(projection);
        root.selectAll('path').data(features).join('path').attr('class', 'state-shape').attr('d', pathGenerator).attr('tabindex', 0).attr('role', 'button').attr('aria-label', d => getStateName(d))
            .on('mouseenter', function (e, d) { showPreview(getStateName(d)); })
            .on('focus', function (e, d) { showPreview(getStateName(d)); })
            .on('click', function (e, d) { const name = getStateName(d); selectState(d3.select(this), name); if (name.toLowerCase().includes('gujarat')) window.location.href = 'gujarat.html'; })
            .on('keydown', function (e, d) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); const name = getStateName(d); selectState(d3.select(this), name); if (name.toLowerCase().includes('gujarat')) window.location.href = 'gujarat.html'; } });
        zoom = d3.zoom().scaleExtent([1, 5]).on('zoom', e => root.attr('transform', e.transform)); svg.call(zoom);
        document.getElementById('zoomIn').onclick = () => svg.transition().call(zoom.scaleBy, 1.35);
        document.getElementById('zoomOut').onclick = () => svg.transition().call(zoom.scaleBy, .74);
        document.getElementById('resetMap').onclick = () => svg.transition().duration(350).call(zoom.transform, d3.zoomIdentity);
        document.getElementById('mapLoading').classList.add('hidden');
    } catch (error) { console.error(error); document.getElementById('mapLoading').innerHTML = '<div class="map-error"><strong>Map could not be loaded.</strong><br>Please open this page with an internet connection so the map boundary data can load.</div>'; }
}

loadMap();