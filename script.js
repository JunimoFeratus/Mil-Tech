const data = [
          // TANKS & BMP
          { id: 1, cat: 'land', name: "Т-90М 'Прорыв'", image:"image/t90m.jpg", country: "Россия", tag: "Танк",
            history: "Разработан ООО 'УКБТМ' в начале 2010-х годов как экспортная и одновременно глубоко модернизированная версия Т-90. Включает новую башню, систему управления огнем 'Калина' и улучшенную защиту.",
            serviceInfo: "На вооружении РФ (около 150+ ед. модификации М/МС), Индии (контракт на 460+ ед.).",
            protectionLabel: "ДЗ 'Реликт'", protectionWeight: 3.5,
            shells: ["3БМ60 'Свинец-2'", "3БК31 'Старт'", "9М119М1 'Инвар-М'"], stats: { main: "125мм 2А46М-5", mass: 48, power: 1130, speed: 60, crew: "3" } },
          { id: 2, cat: 'land', name: "M1A2 SEPv3 Abrams", image:"image/M1A2.jpg", country: "США", tag: "Танк",
            history: "Версия SEPv3 (System Enhancement Package) начала поступать в войска в 2017 году. Фокус на живучести, электронике и установке новых пакетов бронирования.",
            serviceInfo: "Армия США (заказано более 1500 обновлений), Польша (250 ед.), Тайвань (108 ед.).",
            protectionLabel: "Пакет TUSK II", protectionWeight: 5.2,
            shells: ["M829A4 (APFSDS)", "M830A1 (HEAT)"], stats: { main: "120мм M256", mass: 66, power: 1500, speed: 67, crew: "4" } },
          { id: 3,cat: 'land',
            name: "Leopard 2A7",country: "Германия",image:"image/Leopard2.webp",tag: "Танк",
            desc: "Модификация с усиленным бронированием корпуса и башни против СВУ и кумулятивных зарядов.",
            history: "Производство началось в 1979 году. Версия 2A7 оптимизирована как для танковых сражений, так и для асимметричных конфликтов.",
            serviceInfo: "На вооружении Бундесвера около 320 танков Leopard 2 различных модификаций.",
            color: "#34495e",
            protectionLabel: "AMAP + модульная броня", protectionWeight: 3.8,
            shells: ["DM63/73 (APFSDS)", "DM11 (HE-P-T)", "DM12A2 (HEAT)"],
            stats: { main: "120мм Rh-120 L55", mass: 67, power: 1500, speed: 72, crew: "4" }},
          { id: 4,cat: 'land',name: "Challenger 2",image:"image/Challenger2.jpg",country: "Великобритания",tag: "Танк",
            desc: "Оснащается массивными модулями Dorchester и решетчатыми экранами (пакет TES).",
            history: "Создан в 1990-х. Уникален использованием нарезной 120-мм пушки. Имеет репутацию одного из самых защищенных танков.",
            serviceInfo: "Числится 227 единиц. Проводится модернизация 148 танков до стандарта Challenger 3.",
            color: "#7f8c8d",
            protectionLabel: "Dorchester TES", protectionWeight: 7.5,
            shells: ["L27A1 (APFSDS)", "L31A7 (HESH)", "L34 (Дымовой)"],
            stats: { main: "120мм L30A1", mass: 62.5, power: 1200, speed: 59, crew: "4" }},
          { id: 5, cat: 'land', name: "M2A4 Bradley",image:"image/Bradley.jpg", country: "США", tag: "БМП",
            history: "Модификация A4 разработана для восстановления мощности двигателя и подвески после многократных модернизаций. Включает оцифрованную систему управления боем.",
            serviceInfo: "На вооружении США (план до 700+ ед. модификации), Саудовской Аравии.",
            protectionLabel: "ДЗ BUSK III", protectionWeight: 2.8,
            shells: ["25мм M919", "TOW-2B"], stats: { main: "25мм M242", mass: 30, power: 675, speed: 61, crew: "3+7" } },
          { id: 6, cat: 'land', name: "БМПТ 'Терминатор'",image:"image/Terminator.jpg", country: "Россия", tag: "БМПТ",
            history: "Разработан на базе Т-72 или Т-90 для поддержки танков в условиях плотной застройки. Концепция родилась после опыта войны в Чечне.",
            serviceInfo: "ВС РФ (около 18-20 ед.), Казахстан (10 ед.), Алжир (около 300 ед.).",
            protectionLabel: "ДЗ 'Реликт'", protectionWeight: 4.0,
            shells: ["2x 30мм 2А42", "ПТУР 'Атака'"], stats: { main: "2x 30мм", mass: 48, power: 1000, speed: 60, crew: "5" } },
          { id: 7, cat: 'land', name: "Puma IFV",image:"image/Ger.webp", country: "Германия", tag: "БМП",
            history: "Совместная разработка KMW и Rheinmetall. Новая эра защищенности для БМП с дистанционно управляемой башней и модульной броней.",
            serviceInfo: "Бундесвер (350 ед. в эксплуатации).",
            protectionLabel: "Уровень C", protectionWeight: 11.5,
            shells: ["30мм PMC 287", "Spike-LR"], stats: { main: "30мм MK 30-2", mass: 31.5, power: 1088, speed: 70, crew: "3+6" } },

          // AIRCRAFT
          { id: 8, cat: 'air', name: "Eurofighter Typhoon", image:"image/eft.webp",country: "ЕС (UK/GER/ITA/ESP)", tag: "Многоцелевой 4++",
            history: "Результат европейской кооперации. Основной боевой истребитель стран НАТО в Европе, оптимизированный для завоевания превосходства в воздухе.",
            serviceInfo: "ВВС Британии (130+), Германии (140+), Саудовской Аравии (72), Катара (24).",
            protectionLabel: "Блок DASS", protectionWeight: 1.5,
            shells: ["Meteor (BVRAAM)", "IRIS-T", "Storm Shadow"], stats: { main: "27мм BK-27", mass: 11.0, power: 18000, speed: 2495, crew: "1" } },
          { id: 9, cat: 'air', name: "Dassault Rafale", image:"image/rafale.jpg",country: "Франция", tag: "Многоцелевой 4++",
            history: "Разработан Францией самостоятельно после выхода из проекта Eurofighter. Воплощает концепцию 'всезадачности' (omnirole).",
            serviceInfo: "ВВС Франции (150+), Индии (36), Египта (54), Катара (36).",
            protectionLabel: "Контейнер Talios", protectionWeight: 0.8,
            shells: ["MICA", "SCALP EG", "AM39 Exocet"], stats: { main: "30мм GIAT 30", mass: 10.3, power: 15300, speed: 1912, crew: "1-2" } },
          { id: 10, cat: 'air', name: "HAL Tejas",image:"image/tejas.webp", country: "Индия", tag: "Легкий истребитель 4+пок",
            history: "Программа LCA (Light Combat Aircraft) стартовала в Индии еще в 1980-х. Первый национальный сверхзвуковой истребитель Индии.",
            serviceInfo: "ВВС Индии (заказано более 120 ед. модификаций Mk1/Mk1A).",
            protectionLabel: "Блок ELT-568 ESP", protectionWeight: 0.5,
            shells: ["Astra MK-I", "Python-5", "I-Derby"], stats: { main: "23мм ГШ-23Л", mass: 6.5, power: 9000, speed: 2200, crew: "1" } },
          { id: 11, cat: 'air', name: "Shenyang J-16", image:"image/j16.png", country: "Китай", tag: "Ударный истребитель 4.5пок",
            history: "Китайская разработка на базе Су-30МКК. Оснащена АФАР-радаром и китайскими двигателями WS-10.",
            serviceInfo: "ВВС НОАК (эксплуатируется более 200 ед. в различных полках).",
            protectionLabel: "ECM Pod KG-600", protectionWeight: 0.9,
            shells: ["PL-10", "PL-15", "YJ-91"], stats: { main: "30мм Тип 30-1", mass: 17.7, power: 28000, speed: 2400, crew: "2" } },
          { id: 12, cat: 'air', name: "Су-35", image:"image/su351.jpg", country: "Россия", tag: "Многофункциональный 4++",
            history: "Самый совершенный представитель семейства Су-27. Обладает двигателями с управляемым вектором тяги и мощнейшим радаром 'Ирбис'.",
            serviceInfo: "ВКС РФ (около 110-120 ед.), ВВС Китая (24 ед.).",
            protectionLabel: "Хибины-М", protectionWeight: 1.2,
            shells: ["Р-77-1", "Р-37М", "КАБ-500"], stats: { main: "30мм ГШ-30-1", mass: 18.5, power: 29000, speed: 2400, crew: "1" } }
      ];

      let currentCategory = 'all';
      let compareTab = 'land';
      let comparisonList = [1, 2, 3, 4];
      let protectionStates = {};

      function showPage(pageId) {
          document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
          document.querySelectorAll('nav a').forEach(a => a.classList.remove('active-nav'));
          document.getElementById(pageId).classList.add('active');
          const nav = document.getElementById('nav-' + pageId);
          if(nav) nav.classList.add('active-nav');
          window.scrollTo(0, 0);
      }

      function filterCatalog(cat) {
          currentCategory = cat;
          document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
          document.getElementById('tab-' + cat).classList.add('active');
          renderCatalog();
      }

      function setCompareTab(tab) {
          compareTab = tab;
          document.querySelectorAll('.comp-tab').forEach(t => t.classList.remove('active'));
          document.getElementById('comp-tab-' + tab).classList.add('active');
          renderComparison();
      }

      function toggleCompare(id) {
          const idx = comparisonList.indexOf(id);
          if (idx === -1) comparisonList.push(id);
          else comparisonList.splice(idx, 1);
          renderCatalog();
          renderComparison();
          updateBadge();
      }

      function toggleProtection(id) {
          protectionStates[id] = !protectionStates[id];
          renderComparison();
      }

      function clearComparison() {
          comparisonList = [];
          renderCatalog();
          renderComparison();
          updateBadge();
      }

      function updateBadge() {
          const b = document.getElementById('compare-count-badge');
          const count = comparisonList.length;
          if (count > 0) {
              b.textContent = count;
              b.style.display = 'inline-block';
          } else {
              b.style.display = 'none';
          }
      }

      function renderCatalog() {
          const grid = document.getElementById('catalog-grid');
          const filtered = data.filter(i => currentCategory === 'all' || i.cat === currentCategory);
          grid.innerHTML = filtered.map(item => {
              const isComp = comparisonList.includes(item.id);
              return `
                <div class="card">
                    <img src="${item.image}" alt="${item.name}" class="card-image">
                    <div class="card-content">
                        <div style="display:flex; justify-content:space-between; align-items:start">
                           <span class="tag">${item.tag}</span>
                           <span style="font-size:0.7rem; color:var(--text-muted); font-weight:700">${item.country}</span>
                        </div>
                        <h3 style="margin-bottom:12px; font-size:1.3rem; height: 3.2rem; overflow:hidden">${item.name}</h3>
                        <div style="margin-top:auto">
                            <button onclick="showDetails(${item.id})" class="btn btn-outline" style="width:100%">Инфо</button>
                            <button onclick="toggleCompare(${item.id})" class="btn ${isComp ? 'btn-remove' : ''}" style="width:100%">
                                ${isComp ? 'Удалить' : 'Сравнить'}
                            </button>
                        </div>
                    </div>
                </div>`;
          }).join('');
      }

      function showDetails(id) {
          const item = data.find(d => d.id === id);
          const content = document.getElementById('detail-content');
          content.innerHTML = `
            <div style="display:flex; gap:40px; margin: 3rem 0; flex-wrap:wrap">
                <img src="${item.image}" alt="${item.name}" class="detail-image">
                <div style="flex:1; min-width:300px">
                    <h1 style="font-size:2.5rem; margin-bottom:10px; border-bottom: 2px solid var(--primary); display:inline-block">${item.name}</h1>
                    <p style="font-size:1.2rem; color:var(--text-muted); margin-bottom:2rem">${item.country} — ${item.tag}</p>
                    <div class="info-box">
                        <h3 style="margin-bottom:10px; color:var(--primary)">История создания</h3>
                        <p style="line-height:1.8">${item.history}</p>
                    </div>
                    <div class="info-box">
                        <h3 style="margin-bottom:10px; color:var(--primary)">Статус и Вооружение</h3>
                        <p style="margin-bottom: 15px; font-weight: 700">${item.serviceInfo}</p>
                        <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 8px">Доступный арсенал:</p>
                        <ul class="shell-list">
                           ${item.shells.map(s => `<li>${s}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            </div>
          `;
          showPage('detail');
      }

      function getMassColor(mass, cat) {
          const limit = cat === 'air' ? 45 : 75;
          const ratio = mass / limit;
          if (ratio < 0.35) return "#10b981";
          if (ratio < 0.65) return "#f59e0b";
          return "#ef4444";
      }

      function renderComparison() {
          const view = document.getElementById('comparison-view');
          const filteredItems = data.filter(i => comparisonList.includes(i.id) && i.cat === compareTab);

          if (!filteredItems.length) {
              view.innerHTML = `<div style="text-align:center; padding:5rem; color:var(--text-muted)">
                <p style="font-size: 1.2rem; margin-bottom: 10px">В этой категории пока нет техники для сравнения.</p>
                <button class="btn" onclick="showPage('catalog')">Перейти в каталог</button>
                </div>`;
              return;
          }

          let html = `<table><thead><tr><th>Характеристика</th>` + filteredItems.map(i => `
            <th style="min-width: 250px">
               <img src="${i.image}" alt="${i.name}" class="comp-image">
               <div style="display:flex; justify-content:space-between; align-items:center; gap: 8px">
                  <span style="font-size:1.1rem">${i.name}</span>
                  <button onclick="toggleCompare(${i.id})" style="background:var(--danger); border:none; color:white; border-radius:50%; width:24px; height:24px; cursor:pointer; flex-shrink:0">✕</button>
               </div>
            </th>`).join('') + `</tr></thead><tbody>`;

          const rows = [
              { l: "Статистика / Страны", type: "service" },
              { l: "Экипаж", k: "crew" },
              { l: "Вооружение", k: "main" },
              { l: "Масса (т)", type: "mass" },
              { l: "Доп. оборудование", type: "prot" },
              { l: "Арсенал / Типы БК", type: "shells" },
              { l: compareTab === 'air' ? "Тяга/Мощность" : "Мощность (л.с.)", k: "power" },
              { l: "Скорость макс.", k: "speed", unit: "км/ч" }
          ];

          rows.forEach(r => {
              html += `<tr><td style="background:#f8fafc; font-weight:700; color:var(--primary); width:200px">${r.l}</td>`;
              filteredItems.forEach(i => {
                  if (r.k) {
                      html += `<td>${i.stats[r.k]} ${r.unit || ''}</td>`;
                  } else if (r.type === 'history') {
                      html += `<td><div style="font-size:0.8rem; line-height:1.4">${i.history.substring(0, 100)}...</div></td>`;
                  } else if (r.type === 'service') {
                      html += `<td><div style="font-size:0.8rem; font-weight:600">${i.serviceInfo}</div></td>`;
                  } else if (r.type === 'mass') {
                      const baseMass = i.stats.mass;
                      const extra = protectionStates[i.id] ? i.protectionWeight : 0;
                      const total = baseMass + extra;
                      const color = getMassColor(total, i.cat);
                      const maxRef = i.cat === 'air' ? 50 : 85;
                      const percent = Math.min((total / maxRef) * 100, 100).toFixed(0);
                      html += `<td>
                          <span style="font-weight:700; color:${color}; font-size: 1.1rem">${total.toFixed(1)} т</span>
                          <div class="stat-bar-bg"><div class="stat-bar-fill" style="width:${percent}%; background:${color}"></div></div>
                      </td>`;
                  } else if (r.type === 'prot') {
                      const active = !!protectionStates[i.id];
                      html += `<td>
                          <div style="font-size: 0.8rem; margin-bottom: 5px; color: var(--text-muted); font-weight: 600">${i.protectionLabel}</div>
                          <button class="btn" style="font-size:10px; width: 100%; padding:6px; background:${active ? 'var(--accent)' : '#94a3b8'}"
                            onclick="toggleProtection(${i.id})"> ${active ? 'УСТАНОВЛЕНО' : 'УСТАНОВИТЬ'}</button>
                      </td>`;
                  } else if (r.type === 'shells') {
                      html += `<td><ul class="shell-list">${i.shells.map(s => `<li>${s}</li>`).join('')}</ul></td>`;
                  }
              });
              html += `</tr>`;
          });

          html += `</tbody></table>`;
          view.innerHTML = html;
      }

      // Init
      renderCatalog();
      renderComparison();
      updateBadge();