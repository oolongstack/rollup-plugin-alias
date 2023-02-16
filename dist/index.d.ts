import { Plugin } from "rollup";
interface AliasOptions {
    entries: {
        [key: string]: string;
    };
}
declare function alias(options: AliasOptions): Plugin;
export default alias;
