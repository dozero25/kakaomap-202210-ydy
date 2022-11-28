var container = document.getElementById('map'); 
        var options = { 
	    center: new kakao.maps.LatLng(33.450701, 126.570667),
	    level: 3 
        };

    var map = new kakao.maps.Map(container, options); 


    var mapTypeControl = new kakao.maps.MapTypeControl();

        map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

        var zoomControl = new kakao.maps.ZoomControl();
        map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
///////////////////////////////지도 설정////////////////////////////////////////

// 검색창 띄우기
class MapService {
    static #instance = null;
    static getInstance() {
        if(this.#instance == null){
        this.#instance = new MapService();
        }
        return this.#instance;
    } 

    load(){
        this.addSearchInputEvent()
        this.addAsideToggleButtonEvent()
        this.addMenuTabEvent();
    }

    addSearchInputEvent(){
        const searchInput = document.querySelector(".search-input");

        searchInput.onclick = () => {
            const searchRecent = document.querySelector(".search-recent");
            searchRecent.classList.toggle("invisible-recent");
        }
    }
    addAsideToggleButtonEvent(){
        const toggleButton = document.querySelector(".toggle-button");

        toggleButton.onclick = () => {
            const aside = document.querySelector("aside");
            aside.classList.toggle("invisible-aside");
            if(aside.classList.contains("invisible-aside")) {
                toggleButton.textContent = "▶";
            }
            else{
                toggleButton.textContent = "◀";
            }
        }
    }

    addMenuTabEvent(){
        const mainMenuTab = document.querySelectorAll(".mainmenutab");

        for(let i = 0; i < mainMenuTab.length; i++){
            mainMenuTab[i].onclick = () => {
                for(let j = 0; j< mainMenuTab.length; j++){
                    mainMenuTab[j].classList.remove("tab-selected");
                }
                mainMenuTab[i].classList.add("tab-selected");

                const searchBody = document.querySelectorAll(".search-body");
                for(let j = 0; j < searchBody.length; j++){
                    searchBody[j].classList.add("invisible-body");
                }
                searchBody[i].classList.remove("invisible-body");
            }
        }
        
    }
}

window.onload = () => {
    MapService.getInstance().load();
}