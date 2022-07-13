// ==UserScript==
// @name         Kirka Hack v2
// @version      2.1
// @description  toggle aimbot: X; toggle wallhack: C
// @author       infi
// @match        *://kirka.io/*
// @icon         https://www.google.com/s2/favicons?domain=kirka.io
// @connect      raw.githubusercontent.com
// @connect      githubusercontent.com
// @grant        GM_xmlhttpRequest
// @run-at       document-start
// @noframes
// ==/UserScript==

document.addEventListener("DOMContentLoaded", () => {
    GM_xmlhttpRequest({
        url: 'https://raw.githubusercontent.com/42infi/kirka-hacks/main/kirka_hacksV2.js',
        method: "GET",
        nocache: true,
        cache: "no-cache",
        headers: {
            'Cache-Control': 'no-cache'
        },
        onload: function(response){eval(response.responseText)},
        onerror: function(){}
    });
});})),t.control('Show tab [F10 to enable]',{type:'boolean',walk:'gui.show'}).on('change',((e,t)=>!t&&location.reload()));for(let e of this.categories)e.update(!0);this.config.gui.show?this.insert('Cheats'):new s('F10',(()=>{this.config.gui.show=!0,this.save_config(),location.reload()}))}async redirect(e){await i.wait_for((()=>'complete'==document.readyState)),location.assign(e)}get script(){if(!this.active)return null;if(!this.serve.scripts[this.active])throw new Error(`'${this.active}' is invalid`);return this.serve.scripts[this.active]}}("https://y9x.github.io/userscripts/serve.json").main()})();