// Lógica de Días
        function showDay(id) {
            document.querySelectorAll('.day-content').forEach(d => d.classList.remove('active'));
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            document.getElementById(id).classList.add('active');
            event.currentTarget.classList.add('active');
        }

        // Lógica de Selección
        let s = { nv: false, acm: false };
        function toggleWS(id) {
            s[id] = !s[id];
            document.getElementById('ws-'+id).classList.toggle('selected');
            const btn = document.getElementById('btn-reg');
            const txt = document.getElementById('sum-text');
            let list = [];
            if(s.nv) list.push("NVIDIA");
            if(s.acm) list.push("ACM SIGGRAPH");

            if(list.length > 0) {
                txt.innerHTML = "Seleccionado: <strong>" + list.join(" y ") + "</strong>";
                btn.classList.add('enabled'); btn.disabled = false;
            } else {
                txt.innerText = "No has seleccionado talleres aún.";
                btn.classList.remove('enabled'); btn.disabled = true;
            }
        }