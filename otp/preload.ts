import { TemplatePlugin } from "../@types/utools";
import { Search } from "./search";
import { Add } from "./add";
import { AddQrcode } from "./qrcode";
import "./key";

try {
  let plugins: TemplatePlugin = {
    otp: {
      mode: "list",
      args: new Search()
    },
    otpAdd: {
      mode: "list",
      args: new Add()
    },
    otpQrcode: {
      mode: "list",
      args: new AddQrcode()
    }
  };
  window.exports = plugins;
} catch (error) {
  alert(error.message + error.stack);
}
