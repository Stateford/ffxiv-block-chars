// TODO #1: implement these chars https://www.reddit.com/r/ffxiv/comments/5esfuo/ingame_text_symbols_updated_for_345_save_and/
const ffxiv_block_chars = {
    "a": "",
    "b": "",
    "c": "",
    "d": "",
    "e": "",
    "f": "",
    "g": "",
    "h": "",
    "i": "",
    "j": "",
    "k": "",
    "l": "",
    "m": "",
    "n": "",
    "o": "",
    "p": "",
    "q": "",
    "r": "",
    "s": "",
    "t": "",
    "u": "",
    "v": "",
    "w": "",
    "x": "",
    "y": "",
    "z": "",
    "1": "",
    "2": "",
    "3": "",
    "4": "",
    "5": "",
    "6": "",
    "7": "",
    "8": "",
    "9": "",
    "0": "",
    "?": ""/*,
    "empty-heart": "♡",
    "filled-in-star": "★",
    "empty-heart": "☆",
    "high-quality": "",
    "upper-right-bracket": "｢",
    "lower-left-bracket": "｣",
    "thin-arrow-point-left": "→",
    "link-tab": "",
    "dice": "",
    "filled-in-plus": "",
    "x-tab": "",
    "o-tab": "",
    "flower": "",
    "target-marker": "",
    "x-marks-the-spot": "",
    "hollow-level-sync": "",
    "filled-in-level-sync":"",
    "arrow-square-down": "",
    "x-diamond": "",
    "star-rank": "",
    "rank-one-roman-numeral": "",
    "rank-two-roman-numeral": "",
    "rank-three-roman-numeral": "",
    "rank-four-roman-numeral": "",
    "rank-five-roman-numeral": "",
    "rank-six-roman-numeral": "",
    "japanese-a": "",
    "japanese-ka": "",
    "compressed-undescore-japanese-ka": "",
    "compressed-underscore-capital-a": ""*/
}

document.onreadystatechange = () => {
    if (document.readyState == "interactive") {
        const target_block_text_box = document.querySelector("#translate-block");
        const english_text_box = document.querySelector("#translate-eng");

        // Actual translation function
        document.querySelector("#translate-btn").addEventListener("click", (event) => {
            const english_text = english_text_box.value.toLowerCase();
            target_block_text_box.value = [...english_text].map((char) => ffxiv_block_chars[char]).join("");
        });


        // Clears when button click
        document.querySelector("#clear-btn").addEventListener("click", (event) => {
            $("#translate-eng").val('');
            $("#translate-block").val('');
        });

        // Checks switch status to see if it's true or false
        var switchStatus = false;
        $(".chatToggle").on('change', function () {
            if ($(this).is(':checked')) {
                switchStatus = $(this).is(':checked');
                alert(switchStatus + ' ' + this.id);// To verify
                var toggleID = this.id;
                addChatPrefix(toggleID);
            }
            else {
                switchStatus = $(this).is(':checked');
                alert(switchStatus + ' ' + this.id);// To verify
            }
        });
        /*
             TODO #2: Add functionality to add the different chat's prefixes to each line
             function addChatPrefix(chatID){
                 switch(chatID) {
                     case "partyChat":
                         line = 3;
                         prefix = "/p";
                         break;
                     default:
                         line = 1;
                         prefix = "";
                         break;
                     }
                 
                 //let line = 3
                 let val = $("#translate-eng").val().split("\n");
                 val.splice(line - 1, 1, prefix);
                 $("#translate-eng").val(val.join("\n"));
             }*/

        /*
        TODO #2: Add functionality that limits each line to be 180 characters, max of 15 lines so we can create one line for CWLS/LS/Other chat channels and add toggles for them. 
         
                document.querySelector("#translate-eng").addEventListener("input", checkLength, false);
                document.querySelector("#translate-eng").addEventListener("focus", checkLength, false);
                document.querySelector("#translate-eng").addEventListener("keyup", checkLength, false);
                document.querySelector("#translate-eng").addEventListener("keydown", checkLength, false);
        
                var maxLength = 180;
        
                var checkLength = function (event) {
                    alert('aaaa');
                    var text = $(this).val();
                    var lines = text.split(/(\r\n|\n|\r)/gm);
                    for (var i = 0; i < lines.length; i++) {
                        if (lines[i].length > maxLength) {
                            lines[i] = lines[i].substring(0, maxLength);
                        }
                    }
                    $(this).val(lines.join(''));
        
                }   
                */
    }
}
