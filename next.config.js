/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains: ["links.papareact.com"],
    },
    webpack: (config) => {
        let modularizeImports = null;
        config.module.rules.some((rule) =>
          rule.oneOf?.some((oneOf) => {
            modularizeImports =
              oneOf?.use?.options?.nextConfig?.modularizeImports;
            return modularizeImports;
          }),
        );
        if (modularizeImports?.["@headlessui/react"])
          delete modularizeImports["@headlessui/react"];
        return config;
      },
  
}

module.exports = nextConfig
