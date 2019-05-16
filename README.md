# popup-slide
页面本身具有滚动条，弹窗后也有滚动条，此时滑动弹窗的内容体验不好，特别是在webview中会有其他问题。因此实现，弹窗可以滚动，底部不能滚动效果。

###使用方法：
1、`npm install popup-slide-htl``

2、``import popupSlideHtl from 'popup-slide-htl'``

3、``popupSlideHtl(maskerId,moveId)`` 

maskerId 为蒙版层的id名称，moveId为滑动区域的名称，如下示例：

```
    <div id="masker">
        <div id="moveWrap">
             <div id="move">
                 <p>11111111111</p>
                 <p>2222222222222</p>
                 <p>3333333333</p>
                 <p>4444444444</p>
                 <p>5555555555</p>
                 <p>66666666666</p>
            </div>
          </div>
    </div>
    <script>
        import popupSlideHtl from 'popup-slide-htl'
        popupSlideHtl('masker','move')
    </script>
```
 调用方法后，就可以实现，页面底部不能滑动，弹窗区域可以正常的滑动。
 
 注意：这里的实现方式和用css控制body，html over-flow:hide的方式不同，这种实现方式会更佳。   
   

