//-- the function calls for animation executed with button " Re-start " and showing svg images -->
    $(document).ready(function () {
        $("#btn-1").click(function () {
          $("#chartContainer").hide();
          $("#svg_40").hide();
          $("#brick").hide();
          $("#in-tab").hide();
          $("#main").hide();
          $("#rest").hide();
        });
    });

//-- the function calls for hiding of svg images -->
    $(document).ready(function () {
        $(function () {
            $("#svg_40").hide();
        });
    });
//-- the function calls for hiding of svg images -->
    $(document).ready(function () {
        $(function () {
            $("#chartContainer").hide();
        });
    });
//-- the function calls for hiding of svg images -->
    $(document).ready(function () {
        $(function () {
            // $('#tab-hide td1').hide();
            $("#in-tab").hide();
        });
    });
//-- the function calls for hiding of svg images -->
        $(document).ready(function () {
        $(function () {
            $("#main").hide();
        });
    });
//-- the function calls for hiding of svg images -->
    $(document).ready(function () {
        $(function () {
            $("#rest").hide();
        });
    });
    //-- the function calls for hiding of svg images -->
    $(document).ready(function () {
        $(function () {
            $("#brick").hide();
        });
    });
//-- the function calls for hiding of svg images -->
    $(document).ready(function () {
        $(function () {
            $("#svg_42").hide();
        });
    });
//-- the function calls for hiding of svg images -->
    $(document).ready(function () {
        $(function () {
            // $("#svg_89").hide();
        });
    });
//-- the function calls for hiding of svg images -->
    $(document).ready(function () {
        $(function () {
            $("#svg_888").hide();
        });
    });
//-- the function calls for hiding of svg images -->
    $(document).ready(function () {
        $(function () {
            //$("#p").hide();
        });
    });

//-- the function calls for various animations on pressing button "Start" -->
    $('#btn-2').click(function () {
        setTimeout(function () {
           myChange();
        },0);

        $("#brick").show();
        $("#svg_89").hide();
        $("#svg_888").show();
        $("#main").show();
        $("#rest").show();
        $('#topp').animate({
            'foo': 20
        }, {
                step: function (foo) {
                    $(this).attr('y', foo);
                },
                duration: 1500
            });
        setTimeout(function () {
            $("#svg_40").show();
        }, 2600);

        setTimeout(function () {
            $("#in-tab").show();
        }, 3400);

        $("#chartContainer").show();

        setTimeout(function () {
            myGraph();
        }, 3600);
        //$("h1").css.("visibility", "show");
        
    });

//-- the function calls for various animations on pressing button "Next" -->

    $(document).ready(function () {
        $("#btn-3").click(function () {
            $("#chartContainer").hide();
            $("#svg_40").hide();
            $("#brick").hide();
            $("#in-tab").hide();
            $('#topp').animate({
                'foo': -20
            }, {
                    step: function (foo) {
                        $(this).attr('y', foo);
                    },
                    duration: 1000
                });

            $('#topp').animate({
                'foo': 20
            }, {
                    step: function (foo) {
                        $(this).attr('y', foo);
                    },
                    duration: 3500
                });

            setTimeout(function () {
                $("#brick").show();
            }, 1800);


            setTimeout(function () {
                $("#svg_40").show();
            }, 4900);

            setTimeout(function () {
                $("#chartContainer").show();
            }, 4400);

            setTimeout(function () {
                $("#in-tab").show();
            }, 4400);

            setTimeout(function () {
                $(".hidden").css("color", "black");
                $("p").show();
            }, 4400);

            setTimeout(function () {
                myGraph();
            }, 4500);

            div.queue(function () {
                $("#svg_40").hide();
                $("#brick").hide();
                div.dequeue();
            });
        });
    });


    var imgObj;
    var animate = null;

    function init() {
        imgObj = document.getElementById('topp');
        imgObj.style.position = 'relative';
        imgObj.style.left = '0px';
    }

    startStopImg = function () {
        if (animate != null) {
            stop();
        } else {
            moveRight();

        }
        change();
    }

    function moveRight() {
        imgObj.style.left = (parseInt(imgObj.style.left) + 10) + 'px';
        animate = setTimeout(moveRight, 50);
    }

     function myChange() {
        var elem = document.getElementById("btn-2");
        if (elem.value == "Stop") elem.value = "Start";
        else elem.value = "Stop";
    }

    stop = function () {
        clearTimeout(animate);
        animate = null;
    }
    window.onload = init();

//-- the function calls for drawing animation of Graph as a result" -->
    //window.onload =
    function myGraph() {

        var chart = new CanvasJS.Chart("chartContainer", {
            animationEnabled: true,
            title: {
                text: "Compression Strength Test Graph"
            },
            axisY: {
                title: "% Finer",
                valueFormatString: "",
                suffix: ".",

            },
            data: [{
                yValueFormatString: "## ",
                xValueFormatString: "YY",
                type: "spline",
                dataPoints: [{
                    x: 1,
                    y: 14
                },
                {
                    x: 2,
                    y: 14
                },
                {
                    x: 3,
                    y: 14
                },
                {
                    x: 4,
                    y: 14
                },
                {
                    x: 5,
                    y: 14
                },
                {
                    x: 6,
                    y: 14
                },
                {
                    x: 7,
                    y: 14
                },
                {
                    x: 8,
                    y: 17.5
                },
                {
                    x: 9,
                    y: 105
                },
                {
                    x: 10,
                    y: 109.2
                },
                {
                    x: 11,
                    y: 110.6
                },
                {
                    x: 12,
                    y: 112
                },
                {
                    x: 13,
                    y: 112
                },
                {
                    x: 14,
                    y: 112
                },
                {
                    x: 15,
                    y: 112
                },
                {
                    x: 16,
                    y: 112
                },
                {
                    x: 17,
                    y: 112
                }
                ]
            }]
        });
        chart.render();
    }
