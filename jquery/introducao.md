* Eliminar elemento  p com click 
    $(document).ready(function(){
    $("p").click(function(){
        $(this).hide();
    });
    });

* Pegar valor de elemento
    $("#btn1").click(function(){
    alert("Text: " + $("#test").text());
    });
    $("#btn2").click(function(){
    alert("HTML: " + $("#test").html());
    });

* Adicionar elemento
    $("p").append("Some appended text.");

* Remover elemento
    $("#div1").remove();

* Ajax
    <!DOCTYPE html>
    <html>
    <head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script>
    $(document).ready(function(){
    $("button").click(function(){
        $("#div1").load("demo_test.txt");
    });
    });
    </script>
    </head>
    <body>

    <div id="div1"><h2>Let jQuery AJAX Change This Text</h2></div>

    <button>Get External Content</button>

    </body>
    </html>
