import cryptoJs from 'crypto-js'

/* var afterEncrypt = cryptoJs.DES.encrypt('shopCode=2R03&shopName=就是这个店铺&empCode=00064114&empName=胡三波', cryptoJs.enc.Utf8.parse("KUN_PENG"), {
  mode: cryptoJs.mode.ECB,
  padding: cryptoJs.pad.Pkcs7
}).toString();
console.log(afterEncrypt) */
// DES加密
export const encryptDes = (message, key) => {
  var keyHex = cryptoJs.enc.Utf8.parse(key)
  var option = { mode: cryptoJs.mode.ECB, padding: cryptoJs.pad.Pkcs7 }
  var encrypted = cryptoJs.DES.encrypt(message, keyHex, option)
  return encrypted.ciphertext.toString()
}

// DES解密
export const decryptDes = (message, key) => {
  var keyHex = cryptoJs.enc.Utf8.parse(key)
  var decrypted = cryptoJs.DES.decrypt(
    {
      ciphertext: cryptoJs.enc.Hex.parse(message)
    },
    keyHex,
    {
      mode: cryptoJs.mode.ECB,
      padding: cryptoJs.pad.Pkcs7
    }
  )
  return decrypted.toString(cryptoJs.enc.Utf8)
}

/* export default {
  calcHeightx(ele, wappered = true) {
    if (wappered) {
      //通过原生方法，获取dom节点的高度------获取element-ui table表格body的元素
      let tabel = window.document.getElementById(ele);
      let wapper = window.document.getElementsByClassName(
        "el-table__body-wrapper"
      );
      //通过原生方法，获取dom节点的高度------获取element-ui table表格header的元素
      let header = window.document.getElementsByClassName(
        "el-table__header-wrapper"
      );
      //必须加延时，要不然赋不上去值
      setTimeout(() => {
        //通过上边计算得到的table高度的value值，减去table表格的header高度，剩下的通过dom节点直接强行赋给table表格的body
        wapper[0].style.height =
          tabel.clientHeight - header[0].clientHeight + "px";
      }, 100);
      console.log(wapper[0].clientHeight);
    }
  }
}; */
