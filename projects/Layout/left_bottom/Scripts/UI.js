/**
 * Anchored the Node to Left-Bottom
 */ 
var UI = qc.defineBehaviour('qc.engine.UI', qc.Behaviour, function() {
}, {
    // fields need to serialize
});

UI.prototype.awake = function() {
	// Download the texture and then create UIImage
    var self = this;
    self.game.assets.load('texture2', 'Assets/texture/texture2.bin', function(t) {
        // create UIImage
        var node = self.game.add.image(self.gameObject);
        node.name = 'LeftBottom2';
        node.texture = t;
        
        // set minAnchor and maxAnchor
        // 0: left/top
        // 1: right/bottom
        node.setAnchor(new qc.Point(0, 1), new qc.Point(0, 1));
        
        // The Node's center is Left-Bottom
        node.pivotX = 0;
        node.pivotY = 1;
        
        // set the position
        node.anchoredX = 100;
        node.anchoredY = -100;
        
        // set size
        node.resetNativeSize();
    });
};
