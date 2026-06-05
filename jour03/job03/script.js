$(document).ready(function(){
    let tiles = [1,2,3,4,5,6,7,8,9];
    let gameEnd = false;

   function initGame(){
    const board = $("#game-board");
    board.empty();

    tiles.forEach(function(tileValue, index){
        const tileDiv  = $("<div></div>");
        tileDiv.addClass("tile");
        tileDiv.attr("data-index",index);

        if(tileValue === 9){

            tileDiv.addClass("empty");
        }else{
            tileDiv.css("background-image","url('images/"+ tileValue + ".png')");
            tileDiv.css("background-size" , "cover");
        }

        board.append(tileDiv);
    });

    if(!gameEnd){
        checkWin();
    }
   } 

   function shuffle(){
    tiles.sort(() => Math.random() - 0.5);
    gameEnd = false;
    $("#message").text("");
    $("#restart-btn").hide();
    initGame();
   }

   shuffle();

   $(document).on("click" , ".tile", function(){
    if(gameEnd) return;

    const clickedIndex = $(this).index();

    const emptyIndex = $(".empty").index();

    if(canMove(clickedIndex,emptyIndex)){
        [tiles[clickedIndex],tiles[emptyIndex]] = [tiles[emptyIndex], tiles[clickedIndex]];

        initGame();
    }
   });

   function canMove(idx1, idx2){
    const row1 = Math.floor(idx1 / 3);
    const col1 = idx1 % 3;
    const row2 = Math.floor(idx2 / 3);
    const col2 = idx2 % 3;
    return (Math.abs(row1 - row2) + Math.abs(col1 - col2)) === 1;
   }

   function checkWin(){
    const currentOrder = tiles.join(",");
    const winOrder = "1,2,3,4,5,6,7,8,9";

    if(currentOrder === winOrder){
        $("#message").text("Vous avez gagné !").css("color","green");
        $("#restart-btn").show();
        gameEnd = true;

        $(".empty").css("background-image","url('images/9.png')");
        $(".empty").css("background-size" , "cover");
        $(".empty").removeClass("empty");
    }
   }

   $("#restart-btn").click(function(){
    shuffle();
   });
});