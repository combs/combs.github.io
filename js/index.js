

import domready from 'domready';

domready(function() {   

    window.reflowThumbnails = function(classFilter="") { 
        let containers = document.querySelectorAll("div.row.thumbnails");

        let selector = "div.thumb";
        let negativeSelector = null;
        if (classFilter) {
            negativeSelector = selector + ":not(." + classFilter + ")";
            selector += "." + classFilter;
        }
        
        for (let container of containers) {
            let clearfixes = container.querySelectorAll("div.clearfix");
            for (let zap of clearfixes) {
                zap.remove()
            }
            let divs = container.querySelectorAll(selector);
            for (let show of divs) {
                show.style.display = "block";
            }
            if (negativeSelector != null) {
                for (let hide of container.querySelectorAll(negativeSelector)) {
                    hide.style.display = "none";
                }
            }
            // let filtered = [].filter.call(divs, function(el) {
            //     let style = window.getComputedStyle(el);
            //     return (style.display !== 'none')
            //   }); 
            for (let i=1;i < divs.length; i++) {
                if ( ( i%3 == 0 )){
                    let cf = document.createElement('div');
                    cf.classList.add("clearfix", "visible-md-block", "visible-lg-block", "visible-xl-block");
                    let wrapper = divs[i-1].parentNode;
                    // <a> around div
                    wrapper.parentNode.insertBefore(cf,wrapper.nextSibling);
                }
                if ( (i%2 == 0)) {
                    let cf = document.createElement('div');
                    cf.classList.add("clearfix", "visible-sm-block");
                    let wrapper = divs[i-1].parentNode;
                    // <a> around div
                    wrapper.parentNode.insertBefore(cf,wrapper.nextSibling);
                }
            }
        }
    };
    window.clearFilters = function() { 
        for (let el of document.querySelectorAll(".filter.active")) {
            el.classList.remove("active");
        }
    };
    window.filterAll = function() {
        clearFilters();
        for (let control of document.querySelectorAll(".filter-all")) {
            control.classList.add("active");
        }
        reflowThumbnails();
    }

    for (let control of document.querySelectorAll(".filter-all")) {
        control.addEventListener("click", function() {
            clearFilters(); reflowThumbnails(); this.classList.add("active");
        });
    }
    for (let control of document.querySelectorAll(".filter-sold")) {
        control.addEventListener("click", function() {
            if (this.classList.contains("active")) { filterAll(); return; }
             
            clearFilters(); reflowThumbnails("status-in-a-private-collection"); this.classList.add("active");
        });
    }
    for (let control of document.querySelectorAll(".filter-available")) {
        control.addEventListener("click", function() {
            if (this.classList.contains("active")) { filterAll();  return; }
             
            clearFilters(); reflowThumbnails("status-available"); this.classList.add("active");
        });
    }
    for (let control of document.querySelectorAll(".filter-upcoming-show")) {
        control.addEventListener("click", function() {
            if (this.classList.contains("active")) { filterAll(); return; }
             
            clearFilters(); reflowThumbnails("status-upcoming-show"); this.classList.add("active");
        });
    }
    for (let control of document.querySelectorAll(".filter-on-display")) {
        control.addEventListener("click", function() {
            if (this.classList.contains("active")) { filterAll();  return; }
                
            clearFilters(); reflowThumbnails("status-on-display"); this.classList.add("active");
        });
    }
});
