import { Plugin } from "rollup";
interface AliasOptions {
  entries:
    | {
        [key: string]: string;
      }
    | { find: string; replacement: string }[];
}
// [{'@':'src', 'components': 'src/components'}]
function alias(options: AliasOptions): Plugin {
  const entries = normalizeEntries(options.entries);
  return {
    name: "alias",
    resolveId(source: string, importer: string | undefined) {
      const entry = entries.find((entry) => {
        return entry.match(source);
      });

      if (!entry) return source;
      return entry.replace(source);
    },
  };
}

function normalizeEntries(entries: AliasOptions["entries"]): Entry[] {
  if (Array.isArray(entries)) {
    return entries.map(({ find, replacement }) => {
      return new Entry(find, replacement);
    });
  } else {
    return Object.keys(entries).map((find) => {
      return new Entry(find, entries[find]);
    });
  }
}
class Entry {
  constructor(public find: string, public replacement: string) {}
  match(filePath: string) {
    return filePath.startsWith(this.find);
  }
  replace(filePath: string) {
    return filePath.replace(this.find, this.replacement);
  }
}
export default alias;
