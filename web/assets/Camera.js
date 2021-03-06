function Camera() {
  var FOV = 60,//2 * Math.atan(window.innerHeight/ (2*700)) * 180 / Math.PI,
      WIDTH = window.innerWidth,
      HEIGHT = window.innerHeight,
      RATIO = WIDTH / HEIGHT,
      NEAR = 0.1,
      FAR = 720;


  var instance = new THREE.OrthographicCamera(WIDTH/-2, WIDTH/2, HEIGHT/2, HEIGHT/-2, 1, 1000);
  //var instance = new THREE.PerspectiveCamera(FOV, RATIO, NEAR, FAR);
  var _object = null,
      _boundHeight = null,
      _boundWidth = null,
      _cameraHeight = window.innerHeight,
      _cameraWidth = window.innerWidth;

  instance.setPosition = function(x, y, z) {
    instance.position.set(x, y, z);
  }

  instance.follow = function(object, boundX, boundY, boundWidth, boundHeight) {
    _object = object;
    _boundX = boundX;
    _boundY = boundY;
    _boundWidth = boundWidth;
    _boundHeight = boundHeight;
  }

  Math.toRadius = function(angle) {
    return angle * Math.PI / 180;
  }

  var new_position = null;
  instance.update = function() {
    new_position = {x: _object.position.x, y: _object.position.y,z: instance.position.z};

    var distance_x = _boundX + WIDTH/2,
        distance_bound_x = _boundWidth - WIDTH/2;
    if(new_position.x < distance_x) {
      new_position.x = distance_x;
    } else if(new_position.x > distance_bound_x){
      new_position.x = distance_bound_x;
    }

    var distance_y = _boundY + HEIGHT/2;
    if(new_position.y < distance_y){
      new_position.y = distance_y;
    } 

    var delta = 0.1;
    instance.position.set(THREE.Math.lerp(instance.position.x, new_position.x, delta), THREE.Math.lerp(instance.position.y, new_position.y, delta), new_position.z);
  }

  return instance;
}
