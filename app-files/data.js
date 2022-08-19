var APP_DATA = {
  "scenes": [
    {
      "id": "0-p1",
      "name": "p1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.4143150530730324,
        "pitch": 0.08236468977403355,
        "fov": 1.500156367942225
      },
      "linkHotspots": [
        {
          "yaw": 0.16784976076803382,
          "pitch": 0.014832095309307292,
          "rotation": 0,
          "target": "1-p2"
        },
        {
          "yaw": -1.0096882377083354,
          "pitch": 0.0822879500584861,
          "rotation": 3.141592653589793,
          "target": "2-p3"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.0118721090086549,
          "pitch": 0.16485908879893074,
          "title": "Красное здание<br>",
          "text": "XZxzxz<br>"
        }
      ]
    },
    {
      "id": "1-p2",
      "name": "p2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.2354664165511675,
          "pitch": 0.08752868314368811,
          "rotation": 0,
          "target": "0-p1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-p3",
      "name": "p3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.642505699366958,
          "pitch": 0.042976247000868995,
          "rotation": 0,
          "target": "0-p1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "xzxzxz",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
