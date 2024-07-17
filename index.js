// TODO: implement these chars https://www.reddit.com/r/ffxiv/comments/5esfuo/ingame_text_symbols_updated_for_345_save_and/
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
    "?": ""
}


document.onreadystatechange = () => {
    if(document.readyState == "interactive") {

        const target_block_text_box = document.querySelector("#translate-block");
        const english_text_box = document.querySelector("#translate-eng");

        document.querySelector("#translate-btn").addEventListener("click", (event) => {
            const english_text = english_text_box.value.toLowerCase();
            target_block_text_box.value = [...english_text].map((char) => {
                if(char in ffxiv_block_chars){
                    return ffxiv_block_chars[char];
                }
                return char;
            }).join("");
        });
    }
};
