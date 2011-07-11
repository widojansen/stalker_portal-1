var pages={
        "back":"../../services.html",
        "referrer":""
    },
    modes= {
        "debug":false,
        "emulate":false,
        "show_all_keydowns":false
    },
    VKBlock = true,
    keys = {
        "POWER" : 2085,
        "MUTE"  : 2192,
        "MIC"   : 2032,
        "NUM1"  : 49,
        "NUM2"  : 50,
        "NUM3"  : 51,
        "NUM4"  : 52,
        "NUM5"  : 53,
        "NUM6"  : 54,
        "NUM7"  : 55,
        "NUM8"  : 56,
        "NUM9"  : 57,
        "NUM0"  : 48,
        "MENU"  : 122,
        "BACK"  : 8,
        "CHANNEL_PREV"  : 1009,
        "CHANNEL_NEXT"  : 9,
        "EXIT"  : 27,
        "REFRESH"  : 116,
        "UP"    : 38,
        "DOWN"  : 40,
        "LEFT"  : 37,
        "RIGHT" : 39,
        "OK"    : 13,
        "PAGE_NEXT" : 34,
        "PAGE_PREV" : 33,
        "VOL_UP"    : 107,
        "VOL_DOWN"  : 109,
        "RED"    : 112,
        "GREEN"  : 113,
        "YELLOW" : 114,
        "BLUE"   : 115,
        "SERVICES"  : 120,
        "TV"    : 121,
        "PHONE" : 119,
        "WEB"   : 123,
        "REW"   : 2066,
        "FFWD"  : 2070,
        "PLAY"  : 2082,
        "PAUSE" : 2082,
        "CONTINUE" : 2082,
        "STOP"  : 2083,
        "REC"   : 2087,
        "INFO"  : 2089,
        "FRAME" : 117,
        "APP"  : 2076,
        "USB_UNMOUNTED" : 2081,
        "USB_MOUNTED"   : 2080
    },
    stb,
    win = {
        "width":720,
        "height":576
    },
    gs = { // game settings
        "layers":{
            "context":null
        },
        "actualSize":576,
        "size":{
            "480":{
                "scr":{
                    "w":500,
                    "h":400
                },
                "cll":{
                    "w":100,
                    "h":100
                }
            },
            "576":{
                "scr":{
                    "w":550,
                    "h":440
                },
                "cll":{
                    "w":110,
                    "h":110
                }
            },
            "720":{
                "scr":{
                    "w":650,
                    "h":520
                },
                "cll":{
                    "w":130,
                    "h":130
                }
            },
            "1080":{
                "scr":{
                    "w":900,
                    "h":720
                },
                "cll":{
                    "w":180,
                    "h":180
                }
            }
        },
        "iItems": {
            "x":5,
            "y":4
        },
        "imgs": [
            {
                "num": 0,
                "img": new Image(),
                "url": "0.png"
            },
            {
                "num": 1,
                "img": new Image(),
                "url": "1.png"
            },
            {
                "num": 2,
                "img": new Image(),
                "url": "2.png"
            },
            {
                "num": 3,
                "img": new Image(),
                "url": "3.png"
            },
            {
                "num": 4,
                "img": new Image(),
                "url": "4.png"
            },
            {
                "num": 5,
                "img": new Image(),
                "url": "5.png"
            },
            {
                "num": 6,
                "img": new Image(),
                "url": "6.png"
            },
            {
                "num": 7,
                "img": new Image(),
                "url": "7.png"
            },
            {
                "num": 8,
                "img": new Image(),
                "url": "8.png"
            },
            {
                "num": 9,
                "img": new Image(),
                "url": "9.png"
            }
        ],
        "arr":new Array(),
        "position":{
            "old":{
                "x":0,
                "y":0
            },
            "current":{
                "x":0,
                "y":0
            }
        }
    },
    _GET;
