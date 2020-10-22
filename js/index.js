

import domready from 'domready';

domready(function() {   

    window.reflowThumbnails = function() { 
        let containers = document.getElementsByClassName("div.row.thumbnails");
        for (let container of containers) {
            let clearfixes = container.querySelectorAll("div.clearfix");
            for (let zap of clearfixes) {
                zap.remove()
            }
            let divs = container.querySelectorAll("div.thumb");
            let filtered = [].filter.call(divs, function(el) {
                let style = window.getComputedStyle(el);
                return (style.display !== 'none')
              }); 
            for (let i=0;i < filtered.length; i++) {
                if ( ( i%3 == 0 )  && ( i > 0 )){
                    let cf = document.createElement('div');
                    cf.classList.add("clearfix", "visible-md-block", "visible-lg-block", "visible-xl-block");
                    let wrapper = filtered[i].parentNode;
                    // <a> around div
                    console.log("adding md+");
                    wrapper.parentNode.insertBefore(cf,wrapper.nextSibling);
                }
                if ( (i%2 == 0) && (i > 0)) {
                    let cf = document.createElement('div');
                    cf.classList.add("clearfix", "visible-sm-block");
                    let wrapper = filtered[i].parentNode;
                    console.log("adding sm");
                    // <a> around div
                    wrapper.parentNode.insertBefore(cf,wrapper.nextSibling);
                }
            }
        }
    };
});
