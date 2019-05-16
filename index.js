export default (moveEleWrapId,moveEleId) => {
    const d = document;
    const g = 'getElementById';
    let moveEleWrap = d[g](moveEleWrapId);
    let moveEle = d[g](moveEleId);
    let gundongY, sty , ety , curY;
    gundongY = sty = ety = curY = 0;
    const maxDis = slideRange()
    moveEle.addEventListener("touchstart", function(event) { //touchstart
        gundongY = 0;
        // 元素当前位置
        ety = parseInt(getT3d(moveEle));
        // 手指位置
        sty = event.touches[0].pageY;
    }, false);

    moveEle.addEventListener("touchmove", function(event) {
        // 防止拖动页面
        event.preventDefault();

        // 手指位置 减去 元素当前位置 就是 要移动的距离
        gundongY = event.touches[0].pageY - sty;

        // 目标位置 就是 要移动的距离 加上 元素当前位置
        curY = gundongY + ety;
        if(curY < -maxDis) {
            curY = -maxDis;
        }
        if(curY >= 0) curY = 0;

        // 只能移动Y轴方向
        moveEle.style.webkitTransform = 'translate3d(' + 0 + 'px, ' + (curY) + 'px,0px)';
    }, false);
    moveEle.addEventListener("touchend", function(event) { //touchend
        ety = curY;
    }, false);

    //计算出滑动块已经移动的初始位置
    function getT3d(elem) {
        let str1 = elem.style.webkitTransform;
        if (str1 == "") return "0";
        str1 = str1.replace("translate3d(", "");
        str1 = str1.replace(")", "");
        let carr = str1.split(",");
        return carr[1]
    }

    //计算出滑动块可滑动的区域范围
    function slideRange () {
        const moveEleWrapHeight = moveEleWrap.clientHeight;
        const moveEleHeight = moveEle.offsetHeight ;
        const del = moveEleHeight - moveEleWrapHeight;
        return del > 0 ? del : 0;
    }
}
