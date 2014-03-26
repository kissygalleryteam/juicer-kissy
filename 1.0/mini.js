/**
 * @fileoverview 
 * @author liuhuo.gk<liuhuo.gk@taobao.com>
 * @module juicer-gallery
 **/
KISSY.add(function (S, Node, Lang) {
    var $ = Node.all,
        EventTarget = S.Event.Target;
    /**
     *
     * @class JuicerGallery
     * @constructor
     */
    function JuicerGallery(config) {

    }

    S.augment(JuicerGallery, EventTarget, /** @lends JuicerGallery.prototype*/{

    });

    return JuicerGallery;

}, {requires:['node', 'lang']});



