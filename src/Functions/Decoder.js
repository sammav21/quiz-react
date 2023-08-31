export default function Decoder(string){
    var txt = document.createElement("textarea");
        txt.innerHTML = string;
        return txt.value;
}