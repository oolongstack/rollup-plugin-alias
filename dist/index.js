function alias(options) {
    const { entries } = options;
    return {
        name: "alias",
        resolveId(source, importer) {
            const key = Object.keys(entries).find((e) => {
                return source.startsWith(e);
            });
            if (key) {
                return source.replace(key, entries[key]);
            }
            else {
                return source;
            }
            // console.log("source, importer", source, importer);
            // if (source === "@/add") {
            //   console.log("哈哈哈哈");
            //   return "./utils/add";
            // }
            // return source;
        },
    };
}

export { alias as default };
