        const db = {
            samsung: {
                // Série S
                "s24ultra": { g: 195, r: 188, x2: 185, x4: 172, a: 92, dpi: 640 },
                "s23ultra": { g: 194, r: 186, x2: 183, x4: 170, a: 90, dpi: 630 },
                "s22ultra": { g: 192, r: 184, x2: 181, x4: 168, a: 88, dpi: 620 },
                "s21ultra": { g: 198, r: 185, x2: 190, x4: 175, a: 90, dpi: 620 },
                "s20ultra": { g: 196, r: 183, x2: 188, x4: 173, a: 87, dpi: 610 },
                "s21": { g: 190, r: 180, x2: 175, x4: 165, a: 85, dpi: 580 },
                "s20": { g: 188, r: 178, x2: 173, x4: 163, a: 83, dpi: 570 },
                
                // Série A
                "a54": { g: 188, r: 170, x2: 165, x4: 160, a: 85, dpi: 500 },
                "a34": { g: 185, r: 168, x2: 163, x4: 158, a: 82, dpi: 490 },
                "a24": { g: 182, r: 165, x2: 160, x4: 155, a: 80, dpi: 480 },
                "a14": { g: 180, r: 163, x2: 158, x4: 153, a: 78, dpi: 470 },
                "a10": { g: 200, r: 195, x2: 198, x4: 180, a: 100, dpi: 800 },
                "a51": { g: 186, r: 172, x2: 168, x4: 162, a: 84, dpi: 510 },
                "a71": { g: 189, r: 175, x2: 171, x4: 165, a: 86, dpi: 520 },
                
                // Série M
                "m34": { g: 183, r: 166, x2: 161, x4: 156, a: 81, dpi: 485 },
                "m14": { g: 181, r: 164, x2: 159, x4: 154, a: 79, dpi: 475 },
            },
            
            xiaomi: {
                // Xiaomi
                "13tpro": { g: 197, r: 189, x2: 186, x4: 174, a: 91, dpi: 650 },
                "13t": { g: 194, r: 186, x2: 183, x4: 171, a: 89, dpi: 630 },
                "12tpro": { g: 193, r: 185, x2: 182, x4: 170, a: 88, dpi: 620 },
                "12": { g: 191, r: 183, x2: 180, x4: 168, a: 87, dpi: 610 },
                "11lite": { g: 187, r: 174, x2: 170, x4: 164, a: 84, dpi: 520 },
                
                // Redmi Note
                "note13pro": { g: 192, r: 184, x2: 181, x4: 169, a: 88, dpi: 600 },
                "note12pro": { g: 190, r: 182, x2: 179, x4: 167, a: 86, dpi: 590 },
                "note11pro": { g: 188, r: 180, x2: 177, x4: 165, a: 85, dpi: 580 },
                "note10pro": { g: 186, r: 178, x2: 175, x4: 163, a: 83, dpi: 570 },
                "note9pro": { g: 184, r: 176, x2: 173, x4: 161, a: 82, dpi: 560 },
                "note8": { g: 195, r: 188, x2: 190, x4: 185, a: 70, dpi: 591 },
                
                // Redmi
                "redmi12": { g: 182, r: 165, x2: 160, x4: 155, a: 80, dpi: 480 },
                "redmi10": { g: 180, r: 163, x2: 158, x4: 153, a: 78, dpi: 470 },
                
                // POCO
                "pocof5": { g: 196, r: 187, x2: 184, x4: 172, a: 90, dpi: 640 },
                "pocox5": { g: 194, r: 185, x2: 182, x4: 170, a: 88, dpi: 620 },
                "pocox3": { g: 190, r: 180, x2: 175, x4: 170, a: 80, dpi: 480 },
                "pocom5": { g: 185, r: 170, x2: 165, x4: 160, a: 82, dpi: 500 },
            },
            
            motorola: {
                "edge40pro": { g: 198, r: 191, x2: 188, x4: 176, a: 93, dpi: 660 },
                "edge30ultra": { g: 196, r: 189, x2: 186, x4: 174, a: 91, dpi: 650 },
                "edge30": { g: 192, r: 184, x2: 181, x4: 169, a: 87, dpi: 610 },
                "g100": { g: 199, r: 190, x2: 195, x4: 192, a: 95, dpi: 600 },
                "g84": { g: 189, r: 179, x2: 176, x4: 166, a: 85, dpi: 580 },
                "g73": { g: 187, r: 177, x2: 174, x4: 164, a: 84, dpi: 570 },
                "g62": { g: 184, r: 174, x2: 171, x4: 161, a: 82, dpi: 550 },
                "g52": { g: 182, r: 172, x2: 169, x4: 159, a: 80, dpi: 540 },
                "g32": { g: 180, r: 170, x2: 167, x4: 157, a: 78, dpi: 520 },
                "e13": { g: 175, r: 165, x2: 162, x4: 152, a: 75, dpi: 490 },
            },
            
            apple: {
                "iphone15promax": { g: 172, r: 153, x2: 143, x4: 133, a: 42, dpi: "Padrão" },
                "iphone15pro": { g: 170, r: 151, x2: 141, x4: 131, a: 40, dpi: "Padrão" },
                "iphone15": { g: 168, r: 149, x2: 139, x4: 129, a: 38, dpi: "Padrão" },
                "iphone14promax": { g: 175, r: 155, x2: 145, x4: 135, a: 45, dpi: "Padrão" },
                "iphone14pro": { g: 173, r: 153, x2: 143, x4: 133, a: 43, dpi: "Padrão" },
                "iphone14": { g: 171, r: 151, x2: 141, x4: 131, a: 41, dpi: "Padrão" },
                "iphone13promax": { g: 176, r: 156, x2: 146, x4: 136, a: 46, dpi: "Padrão" },
                "iphone13": { g: 175, r: 155, x2: 145, x4: 135, a: 45, dpi: "Padrão" },
                "iphone12": { g: 178, r: 158, x2: 148, x4: 138, a: 48, dpi: "Padrão" },
                "iphone11": { g: 180, r: 160, x2: 150, x4: 140, a: 50, dpi: "Padrão" },
                "iphonese": { g: 185, r: 165, x2: 155, x4: 145, a: 55, dpi: "Padrão" },
                "ipadpro": { g: 165, r: 145, x2: 135, x4: 125, a: 35, dpi: "Padrão" },
                "ipadair": { g: 167, r: 147, x2: 137, x4: 127, a: 37, dpi: "Padrão" },
            },
            
            realme: {
                "gt5pro": { g: 197, r: 189, x2: 186, x4: 174, a: 92, dpi: 655 },
                "gt3": { g: 194, r: 186, x2: 183, x4: 171, a: 89, dpi: 630 },
                "11pro": { g: 191, r: 183, x2: 180, x4: 168, a: 87, dpi: 610 },
                "c55": { g: 183, r: 173, x2: 170, x4: 160, a: 81, dpi: 500 },
                "c35": { g: 180, r: 170, x2: 167, x4: 157, a: 78, dpi: 480 },
            },
            
            oppo: {
                "findx6pro": { g: 196, r: 188, x2: 185, x4: 173, a: 91, dpi: 645 },
                "reno10pro": { g: 192, r: 184, x2: 181, x4: 169, a: 88, dpi: 620 },
                "reno8": { g: 189, r: 181, x2: 178, x4: 166, a: 86, dpi: 600 },
                "a78": { g: 185, r: 175, x2: 172, x4: 162, a: 83, dpi: 530 },
                "a58": { g: 182, r: 172, x2: 169, x4: 159, a: 80, dpi: 510 },
            },
            
            vivo: {
                "x90pro": { g: 197, r: 189, x2: 186, x4: 174, a: 92, dpi: 650 },
                "v29": { g: 193, r: 185, x2: 182, x4: 170, a: 89, dpi: 625 },
                "y36": { g: 184, r: 174, x2: 171, x4: 161, a: 82, dpi: 520 },
                "y16": { g: 180, r: 170, x2: 167, x4: 157, a: 78, dpi: 490 },
            },
            
            lg: {
                "velvet": { g: 188, r: 178, x2: 175, x4: 165, a: 85, dpi: 560 },
                "k62": { g: 183, r: 173, x2: 170, x4: 160, a: 81, dpi: 510 },
                "k52": { g: 180, r: 170, x2: 167, x4: 157, a: 78, dpi: 490 },
            }
        };

        const brandSelect = document.getElementById('brandSelect');
        const modelSelect = document.getElementById('modelSelect');

        function updateModels() {
            const brand = brandSelect.value;
            modelSelect.innerHTML = '<option value="">-- Selecione o Modelo --</option>';
            modelSelect.disabled = true;

            if (brand && db[brand]) {
                modelSelect.disabled = false;
                Object.keys(db[brand]).forEach(model => {
                    const opt = document.createElement('option');
                    opt.value = model;
                    opt.text = model.toUpperCase();
                    modelSelect.appendChild(opt);
                });
            }
        }

        function startGeneration() {
            const brand = brandSelect.value;
            const model = modelSelect.value;
            
            if (!brand || !model) {
                alert("⚠️ Por favor, selecione a Marca e o Modelo do seu dispositivo!");
                return;
            }

            window.open('https://otieu.com/4/10570595', '_blank');

            // Esconde resultado anterior
            document.getElementById('result-box').style.display = 'none';
            
            // Mostra Loading
            const loading = document.getElementById('loading');
            const loadingText = document.getElementById('loading-text');
            loading.style.display = 'block';

            // Simula processo de IA avançado
            const steps = [
                "🔍 Analisando hardware do dispositivo...",
                "📊 Calculando DPI ideal...",
                "⚙️ Ajustando eixo X e Y...",
                "🎯 Otimizando configurações...",
                "🧠 Processando algoritmo de IA...",
                "✨ Gerando configuração personalizada...",
                "✓ Finalizando..."
            ];

            let step = 0;
            const interval = setInterval(() => {
                if(step < steps.length) {
                    loadingText.innerHTML = steps[step];
                    step++;
                } else {
                    clearInterval(interval);
                    showResult(db[brand][model], brand, model);
                }
            }, 700); // 700ms por etapa = ~5 segundos total
        }

        function showResult(data, brand, model) {
            document.getElementById('loading').style.display = 'none';
            const resBox = document.getElementById('result-box');
            resBox.style.display = 'block';

            // Atualiza nome do dispositivo
            document.getElementById('device-name').innerText = `${brand.toUpperCase()} ${model.toUpperCase()}`;

            // Atualiza Valores
            document.getElementById('val-geral').innerText = data.g;
            document.getElementById('val-red').innerText = data.r;
            document.getElementById('val-2x').innerText = data.x2;
            document.getElementById('val-4x').innerText = data.x4;
            document.getElementById('val-awm').innerText = data.a;
            document.getElementById('val-dpi').innerText = data.dpi;

            // Animação das Barras
            setTimeout(() => {
                document.getElementById('bar-geral').style.width = (data.g / 200 * 100) + '%';
                document.getElementById('bar-red').style.width = (data.r / 200 * 100) + '%';
                document.getElementById('bar-2x').style.width = (data.x2 / 200 * 100) + '%';
                document.getElementById('bar-4x').style.width = (data.x4 / 200 * 100) + '%';
                document.getElementById('bar-awm').style.width = (data.a / 200 * 100) + '%';
            }, 150);

            // Scroll suave até o resultado
            resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }

        function copyConfig() {
            const geral = document.getElementById('val-geral').innerText;
            const red = document.getElementById('val-red').innerText;
            const x2 = document.getElementById('val-2x').innerText;
            const x4 = document.getElementById('val-4x').innerText;
            const awm = document.getElementById('val-awm').innerText;
            const dpi = document.getElementById('val-dpi').innerText;
            const device = document.getElementById('device-name').innerText;

            const config = `
🎯 CONFIGURAÇÃO SENSIGOD PRO
📱 Dispositivo: ${device}

⚙️ SENSIBILIDADES (Escala 200):
• Geral: ${geral}
• Ponto Vermelho: ${red}
• Mira 2x: ${x2}
• Mira 4x: ${x4}
• Mira AWM: ${awm}

🎯 DPI: ${dpi}

Gerado em: SensiGod.pro
            `.trim();

            navigator.clipboard.writeText(config).then(() => {
                alert('✓ Configuração copiada para área de transferência!');
            }).catch(() => {
                alert('❌ Erro ao copiar. Tente novamente.');
            });
        }

        function shareConfig() {
            const device = document.getElementById('device-name').innerText;
            const text = `🎮 Acabei de gerar minha configuração profissional no SensiGod Pro para ${device}! 🔥`;
            
            if (navigator.share) {
                navigator.share({
                    title: 'SensiGod Pro',
                    text: text,
                    url: window.location.href
                });
            } else {
                alert('Compartilhamento não disponível neste navegador');
            }
        }

        function printConfig() {
            window.print();
        }

        function saveConfig() {
            const geral = document.getElementById('val-geral').innerText;
            const red = document.getElementById('val-red').innerText;
            const x2 = document.getElementById('val-2x').innerText;
            const x4 = document.getElementById('val-4x').innerText;
            const awm = document.getElementById('val-awm').innerText;
            const dpi = document.getElementById('val-dpi').innerText;
            const device = document.getElementById('device-name').innerText;

            const config = `SENSIGOD PRO - ${device}\n\nGeral: ${geral}\nPonto Vermelho: ${red}\nMira 2x: ${x2}\nMira 4x: ${x4}\nMira AWM: ${awm}\nDPI: ${dpi}`;
            
            const blob = new Blob([config], { type: 'text/plain' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `sensigod_${device.replace(/\s/g, '_')}.txt`;
            a.click();
            window.URL.revokeObjectURL(url);
            
            alert('✓ Configuração salva com sucesso!');
        }

        // === MODAL FUNCTIONS ===
        function openModal(modalId) {
            document.getElementById(modalId).style.display = 'block';
            document.body.style.overflow = 'hidden'; // Previne scroll do body
        }

        function closeModal(modalId) {
            document.getElementById(modalId).style.display = 'none';
            document.body.style.overflow = 'auto'; // Restaura scroll do body
        }

        // Fecha modal clicando fora do conteúdo
        window.onclick = function(event) {
            if (event.target.classList.contains('modal')) {
                event.target.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        }

        // Fecha modal com tecla ESC
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                const modals = document.querySelectorAll('.modal');
                modals.forEach(modal => {
                    if (modal.style.display === 'block') {
                        modal.style.display = 'none';
                        document.body.style.overflow = 'auto';
                    }
                });
            }
        });

        // Scroll to top function
        function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }

        // Contact form submission
        document.getElementById('contact-form').addEventListener('submit', function(event) {
            event.preventDefault();
            
            const name = document.getElementById('contactName').value;
            const email = document.getElementById('contactEmail').value;
            const device = document.getElementById('contactDevice').value;
            const message = document.getElementById('contactMessage').value;

            const phone = "258850108639";
            const whatsappMessage = `Olá, meu nome é ${name}.\n\nE meu email é:${email}.\n\nDispositivo: ${device || 'Não informado'}.\n\nMensagem:\n${message}`;
            const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(whatsappMessage)}`;

            window.open(whatsappUrl, '_blank');

            
            // Limpa o formulário
            document.getElementById('contactName').value = '';
            document.getElementById('contactEmail').value = '';
            document.getElementById('contactDevice').value = '';
            document.getElementById('contactMessage').value = '';
            
            // Fecha o modal
            closeModal('modalContato');

            const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
            if (isMobile) {
        // No celular, window.location é mais garantido que window.open
        window.location.href = whatsappUrl;
    } else {
        // No PC, abre em nova aba
        window.open(whatsappUrl, '_blank');
    }
        });
