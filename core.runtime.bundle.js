
/* ===================== ENCODED CONFIG ===================== */
const _k = "ObjectClassDeterrent";

/* base64 encoded URL */
const _r = {
    x1: "aHR0cHM6Ly9lem1hc3RlcmRldi5naXRodWIuaW8vTWFrZS1MaWZlLUVhc2llci9pbmRleC5odG1s"
};

let _d = null;

/* ===================== INTERNAL HANDLERS ===================== */

/* disguised open function */
function _initGate(x){
    _d = atob(_r[x]);

    document.getElementById("lockPassword").value = "";
    document.getElementById("lockError").style.display = "none";

    new bootstrap.Modal(document.getElementById("lockModal")).show();
}

/* disguised verify */
function _validateAccess(){
    const v = document.getElementById("lockPassword").value;

    if(v === _k){
        sessionStorage.setItem("_fx", "1");
        window.location.href = _d;
    } else {
        document.getElementById("lockError").style.display = "block";
    }
}

/* ===================== PUBLIC BRIDGE ===================== */
/* only expose minimal entry points */

window.lock_openGate = function(key){
    _initGate("x1");
};

window.lock_verifyKey = function(){
    _validateAccess();
};