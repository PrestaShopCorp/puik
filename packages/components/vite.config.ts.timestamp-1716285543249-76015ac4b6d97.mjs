// packages/components/vite.config.ts
import { resolve } from "path";
import glob from "file:///home/mgoudjil/projects/puik/node_modules/.pnpm/fast-glob@3.3.2/node_modules/fast-glob/out/index.js";
import { defineConfig } from "file:///home/mgoudjil/projects/puik/node_modules/.pnpm/vite@5.2.11_@types+node@20.12.12_sass@1.77.1/node_modules/vite/dist/node/index.js";
import dts from "file:///home/mgoudjil/projects/puik/node_modules/.pnpm/vite-plugin-dts@3.9.1_@types+node@20.12.12_rollup@4.17.2_typescript@5.4.5_vite@5.2.11_@types+node@20.12.12_sass@1.77.1_/node_modules/vite-plugin-dts/dist/index.mjs";
import { nodeResolve } from "file:///home/mgoudjil/projects/puik/node_modules/.pnpm/@rollup+plugin-node-resolve@15.2.3_rollup@4.17.2/node_modules/@rollup/plugin-node-resolve/dist/es/index.js";
import vue from "file:///home/mgoudjil/projects/puik/node_modules/.pnpm/@vitejs+plugin-vue@4.6.2_vite@5.2.11_@types+node@20.12.12_sass@1.77.1__vue@3.3.10_typescript@5.4.5_/node_modules/@vitejs/plugin-vue/dist/index.mjs";

// packages/utils/types.ts
import { Comment } from "file:///home/mgoudjil/projects/puik/node_modules/.pnpm/vue@3.3.10_typescript@5.4.5/node_modules/vue/index.mjs";
import { isVNode } from "file:///home/mgoudjil/projects/puik/node_modules/.pnpm/vue@3.3.10_typescript@5.4.5/node_modules/vue/index.mjs";

// packages/utils/build.ts
var excludeFiles = (files, filesToExclude = []) => {
  const excludes = [...filesToExclude, "node_modules", "dist", "vite.config.ts"];
  return files.filter(
    (path) => !excludes.some((exclude) => path.includes(exclude))
  );
};

// packages/components/package.json
var package_default = {
  name: "@prestashopcorp/puik-components",
  description: "PUIK Vue 3 components library.",
  version: "2.0.0-beta.4",
  type: "module",
  scripts: {
    build: "vue-tsc --noEmit --project ./tsconfig.build.json && vite build"
  },
  peerDependencies: {
    vue: "^3.3.7"
  },
  dependencies: {
    "@headlessui/vue": "^1.7.22",
    "@popperjs/core": "^2.11.8",
    "@prestashopcorp/puik-theme": "workspace:*",
    "@vueuse/core": "^10.9.0",
    "radix-vue": "^1.7.4"
  },
  devDependencies: {
    vue: "3.3.10",
    "vue-router": "^4.3.2",
    "vue-tsc": "^1.8.27"
  },
  files: [
    "dist"
  ],
  sideEffects: false,
  publishConfig: {
    main: "./dist/index.cjs",
    module: "./dist/index.mjs",
    types: "./dist/index.d.ts",
    exports: {
      ".": {
        import: {
          types: "./dist/index.d.ts",
          default: "./dist/index.mjs"
        },
        require: {
          types: "./dist/index.d.ts",
          default: "./dist/index.cjs"
        }
      },
      "./*": "./dist/*"
    }
  }
};

// packages/components/vite.config.ts
var __vite_injected_original_dirname = "/home/mgoudjil/projects/puik/packages/components";
var vite_config_default = defineConfig({
  plugins: [
    vue({ customElement: true }),
    dts({
      tsconfigPath: "tsconfig.build.json"
    }),
    nodeResolve()
  ],
  css: {
    postcss: resolve(__vite_injected_original_dirname, "../theme/postcss.config.js")
  },
  build: {
    lib: {
      entry: resolve(__vite_injected_original_dirname, "./index.ts")
    },
    rollupOptions: {
      external: [
        ...Object.keys(package_default.dependencies),
        ...Object.keys(package_default.peerDependencies),
        /^@prestashopcorp\/puik-theme\/.*/
      ],
      input: excludeFiles(
        await glob("./**/*.{vue,ts}", {
          cwd: "./",
          absolute: true,
          onlyFiles: true
        }),
        ["stories", "test"]
      ),
      output: [
        {
          dir: "./dist",
          format: "esm",
          preserveModules: true,
          preserveModulesRoot: resolve(__vite_injected_original_dirname, "./"),
          entryFileNames: (chunk) => {
            if (chunk.name.includes("node_modules")) {
              return `${chunk.name.replace("node_modules", "_external")}.mjs`;
            }
            if (chunk.name.includes("packages")) {
              return `${chunk.name.replace("packages", "_external")}.mjs`;
            }
            return "[name].mjs";
          },
          exports: "named"
        },
        {
          dir: "./dist",
          format: "cjs",
          preserveModules: true,
          preserveModulesRoot: resolve(__vite_injected_original_dirname, "./"),
          entryFileNames: (chunk) => {
            if (chunk.name.includes("node_modules")) {
              return `${chunk.name.replace("node_modules", "_external")}.cjs`;
            }
            if (chunk.name.includes("packages")) {
              return `${chunk.name.replace("packages", "_external")}.cjs`;
            }
            return "[name].cjs";
          },
          exports: "named"
        }
      ]
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsicGFja2FnZXMvY29tcG9uZW50cy92aXRlLmNvbmZpZy50cyIsICJwYWNrYWdlcy91dGlscy90eXBlcy50cyIsICJwYWNrYWdlcy91dGlscy9idWlsZC50cyIsICJwYWNrYWdlcy9jb21wb25lbnRzL3BhY2thZ2UuanNvbiJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9ob21lL21nb3VkamlsL3Byb2plY3RzL3B1aWsvcGFja2FnZXMvY29tcG9uZW50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvbWdvdWRqaWwvcHJvamVjdHMvcHVpay9wYWNrYWdlcy9jb21wb25lbnRzL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL21nb3VkamlsL3Byb2plY3RzL3B1aWsvcGFja2FnZXMvY29tcG9uZW50cy92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdwYXRoJztcbmltcG9ydCBnbG9iIGZyb20gJ2Zhc3QtZ2xvYic7XG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCBkdHMgZnJvbSAndml0ZS1wbHVnaW4tZHRzJztcbmltcG9ydCB7IG5vZGVSZXNvbHZlIH0gZnJvbSAnQHJvbGx1cC9wbHVnaW4tbm9kZS1yZXNvbHZlJztcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJztcbmltcG9ydCB7IGV4Y2x1ZGVGaWxlcyB9IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCBwa2cgZnJvbSAnLi9wYWNrYWdlLmpzb24nIGFzc2VydCB7IHR5cGU6ICdqc29uJyB9O1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgdnVlKHsgY3VzdG9tRWxlbWVudDogdHJ1ZSB9KSxcbiAgICBkdHMoe1xuICAgICAgdHNjb25maWdQYXRoOiAndHNjb25maWcuYnVpbGQuanNvbidcbiAgICB9KSxcbiAgICBub2RlUmVzb2x2ZSgpXG4gIF0sXG4gIGNzczoge1xuICAgIHBvc3Rjc3M6IHJlc29sdmUoX19kaXJuYW1lLCAnLi4vdGhlbWUvcG9zdGNzcy5jb25maWcuanMnKVxuICB9LFxuICBidWlsZDoge1xuICAgIGxpYjoge1xuICAgICAgZW50cnk6IHJlc29sdmUoX19kaXJuYW1lLCAnLi9pbmRleC50cycpXG4gICAgfSxcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBleHRlcm5hbDogW1xuICAgICAgICAuLi5PYmplY3Qua2V5cyhwa2cuZGVwZW5kZW5jaWVzKSxcbiAgICAgICAgLi4uT2JqZWN0LmtleXMocGtnLnBlZXJEZXBlbmRlbmNpZXMpLFxuICAgICAgICAvXkBwcmVzdGFzaG9wY29ycFxcL3B1aWstdGhlbWVcXC8uKi9cbiAgICAgIF0sXG4gICAgICBpbnB1dDogZXhjbHVkZUZpbGVzKFxuICAgICAgICBhd2FpdCBnbG9iKCcuLyoqLyoue3Z1ZSx0c30nLCB7XG4gICAgICAgICAgY3dkOiAnLi8nLFxuICAgICAgICAgIGFic29sdXRlOiB0cnVlLFxuICAgICAgICAgIG9ubHlGaWxlczogdHJ1ZVxuICAgICAgICB9KSxcbiAgICAgICAgWydzdG9yaWVzJywgJ3Rlc3QnXVxuICAgICAgKSxcbiAgICAgIG91dHB1dDogW1xuICAgICAgICB7XG4gICAgICAgICAgZGlyOiAnLi9kaXN0JyxcbiAgICAgICAgICBmb3JtYXQ6ICdlc20nLFxuICAgICAgICAgIHByZXNlcnZlTW9kdWxlczogdHJ1ZSxcbiAgICAgICAgICBwcmVzZXJ2ZU1vZHVsZXNSb290OiByZXNvbHZlKF9fZGlybmFtZSwgJy4vJyksXG4gICAgICAgICAgZW50cnlGaWxlTmFtZXM6IChjaHVuaykgPT4ge1xuICAgICAgICAgICAgaWYgKGNodW5rLm5hbWUuaW5jbHVkZXMoJ25vZGVfbW9kdWxlcycpKSB7XG4gICAgICAgICAgICAgIHJldHVybiBgJHtjaHVuay5uYW1lLnJlcGxhY2UoJ25vZGVfbW9kdWxlcycsICdfZXh0ZXJuYWwnKX0ubWpzYDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjaHVuay5uYW1lLmluY2x1ZGVzKCdwYWNrYWdlcycpKSB7XG4gICAgICAgICAgICAgIHJldHVybiBgJHtjaHVuay5uYW1lLnJlcGxhY2UoJ3BhY2thZ2VzJywgJ19leHRlcm5hbCcpfS5tanNgO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuICdbbmFtZV0ubWpzJztcbiAgICAgICAgICB9LFxuICAgICAgICAgIGV4cG9ydHM6ICduYW1lZCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGRpcjogJy4vZGlzdCcsXG4gICAgICAgICAgZm9ybWF0OiAnY2pzJyxcbiAgICAgICAgICBwcmVzZXJ2ZU1vZHVsZXM6IHRydWUsXG4gICAgICAgICAgcHJlc2VydmVNb2R1bGVzUm9vdDogcmVzb2x2ZShfX2Rpcm5hbWUsICcuLycpLFxuICAgICAgICAgIGVudHJ5RmlsZU5hbWVzOiAoY2h1bmspID0+IHtcbiAgICAgICAgICAgIGlmIChjaHVuay5uYW1lLmluY2x1ZGVzKCdub2RlX21vZHVsZXMnKSkge1xuICAgICAgICAgICAgICByZXR1cm4gYCR7Y2h1bmsubmFtZS5yZXBsYWNlKCdub2RlX21vZHVsZXMnLCAnX2V4dGVybmFsJyl9LmNqc2A7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2h1bmsubmFtZS5pbmNsdWRlcygncGFja2FnZXMnKSkge1xuICAgICAgICAgICAgICByZXR1cm4gYCR7Y2h1bmsubmFtZS5yZXBsYWNlKCdwYWNrYWdlcycsICdfZXh0ZXJuYWwnKX0uY2pzYDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAnW25hbWVdLmNqcyc7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBleHBvcnRzOiAnbmFtZWQnXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIH1cbn0pO1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9tZ291ZGppbC9wcm9qZWN0cy9wdWlrL3BhY2thZ2VzL3V0aWxzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9tZ291ZGppbC9wcm9qZWN0cy9wdWlrL3BhY2thZ2VzL3V0aWxzL3R5cGVzLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL21nb3VkamlsL3Byb2plY3RzL3B1aWsvcGFja2FnZXMvdXRpbHMvdHlwZXMudHNcIjtpbXBvcnQgeyBDb21tZW50IH0gZnJvbSAndnVlJztcbmltcG9ydCB0eXBlIHsgVk5vZGUsIFNsb3QgfSBmcm9tICd2dWUnO1xuXG5leHBvcnQgeyBpc1ZOb2RlIH0gZnJvbSAndnVlJztcblxuZXhwb3J0IGNvbnN0IGlzT2JqZWN0ID0gKHZhbDogdW5rbm93bik6IHZhbCBpcyBSZWNvcmQ8YW55LCBhbnk+ID0+XG4gIHZhbCAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0JztcblxuZXhwb3J0IGNvbnN0IGlzRnVuY3Rpb24gPSAodmFsOiB1bmtub3duKTogdmFsIGlzICgpID0+IHZvaWQgPT5cbiAgdHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJztcblxuZXhwb3J0IGNvbnN0IGlzTnVtYmVyID0gKHZhbDogdW5rbm93bik6IHZhbCBpcyBudW1iZXIgPT4gdHlwZW9mIHZhbCA9PT0gJ251bWJlcic7XG5cbmV4cG9ydCBjb25zdCBpc1N0cmluZyA9ICh2YWw6IHVua25vd24pOiB2YWwgaXMgc3RyaW5nID0+IHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnO1xuXG5leHBvcnQgZnVuY3Rpb24gc2xvdElzRW1wdHkoc2xvdDogU2xvdCB8IHVuZGVmaW5lZCwgc2xvdFByb3BzID0ge30pOiBib29sZWFuIHtcbiAgaWYgKCFzbG90KSByZXR1cm4gZmFsc2U7XG5cbiAgcmV0dXJuIHNsb3Qoc2xvdFByb3BzKS5zb21lKCh2bm9kZTogVk5vZGUpID0+IHtcbiAgICBpZiAodm5vZGUudHlwZSA9PT0gQ29tbWVudCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodm5vZGUuY2hpbGRyZW4pICYmICF2bm9kZS5jaGlsZHJlbi5sZW5ndGgpIHJldHVybiBmYWxzZTtcblxuICAgIHJldHVybiAoXG4gICAgICB2bm9kZS50eXBlICE9PSBUZXh0IHx8XG4gICAgICAodHlwZW9mIHZub2RlLmNoaWxkcmVuID09PSAnc3RyaW5nJyAmJiB2bm9kZS5jaGlsZHJlbi50cmltKCkgIT09ICcnKVxuICAgICk7XG4gIH0pO1xufVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9tZ291ZGppbC9wcm9qZWN0cy9wdWlrL3BhY2thZ2VzL3V0aWxzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9tZ291ZGppbC9wcm9qZWN0cy9wdWlrL3BhY2thZ2VzL3V0aWxzL2J1aWxkLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL21nb3VkamlsL3Byb2plY3RzL3B1aWsvcGFja2FnZXMvdXRpbHMvYnVpbGQudHNcIjtleHBvcnQgY29uc3QgZXhjbHVkZUZpbGVzID0gKFxuICBmaWxlczogc3RyaW5nW10sXG4gIGZpbGVzVG9FeGNsdWRlOiBzdHJpbmdbXSA9IFtdXG4pID0+IHtcbiAgY29uc3QgZXhjbHVkZXMgPSBbLi4uZmlsZXNUb0V4Y2x1ZGUsICdub2RlX21vZHVsZXMnLCAnZGlzdCcsICd2aXRlLmNvbmZpZy50cyddO1xuICByZXR1cm4gZmlsZXMuZmlsdGVyKFxuICAgIChwYXRoKSA9PiAhZXhjbHVkZXMuc29tZSgoZXhjbHVkZSkgPT4gcGF0aC5pbmNsdWRlcyhleGNsdWRlKSlcbiAgKTtcbn07XG4iLCAie1xuICBcIm5hbWVcIjogXCJAcHJlc3Rhc2hvcGNvcnAvcHVpay1jb21wb25lbnRzXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJQVUlLIFZ1ZSAzIGNvbXBvbmVudHMgbGlicmFyeS5cIixcbiAgXCJ2ZXJzaW9uXCI6IFwiMi4wLjAtYmV0YS40XCIsXG4gIFwidHlwZVwiOiBcIm1vZHVsZVwiLFxuICBcInNjcmlwdHNcIjoge1xuICAgIFwiYnVpbGRcIjogXCJ2dWUtdHNjIC0tbm9FbWl0IC0tcHJvamVjdCAuL3RzY29uZmlnLmJ1aWxkLmpzb24gJiYgdml0ZSBidWlsZFwiXG4gIH0sXG4gIFwicGVlckRlcGVuZGVuY2llc1wiOiB7XG4gICAgXCJ2dWVcIjogXCJeMy4zLjdcIlxuICB9LFxuICBcImRlcGVuZGVuY2llc1wiOiB7XG4gICAgXCJAaGVhZGxlc3N1aS92dWVcIjogXCJeMS43LjIyXCIsXG4gICAgXCJAcG9wcGVyanMvY29yZVwiOiBcIl4yLjExLjhcIixcbiAgICBcIkBwcmVzdGFzaG9wY29ycC9wdWlrLXRoZW1lXCI6IFwid29ya3NwYWNlOipcIixcbiAgICBcIkB2dWV1c2UvY29yZVwiOiBcIl4xMC45LjBcIixcbiAgICBcInJhZGl4LXZ1ZVwiOiBcIl4xLjcuNFwiXG4gIH0sXG4gIFwiZGV2RGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcInZ1ZVwiOiBcIjMuMy4xMFwiLFxuICAgIFwidnVlLXJvdXRlclwiOiBcIl40LjMuMlwiLFxuICAgIFwidnVlLXRzY1wiOiBcIl4xLjguMjdcIlxuICB9LFxuICBcImZpbGVzXCI6IFtcbiAgICBcImRpc3RcIlxuICBdLFxuICBcInNpZGVFZmZlY3RzXCI6IGZhbHNlLFxuICBcInB1Ymxpc2hDb25maWdcIjoge1xuICAgIFwibWFpblwiOiBcIi4vZGlzdC9pbmRleC5janNcIixcbiAgICBcIm1vZHVsZVwiOiBcIi4vZGlzdC9pbmRleC5tanNcIixcbiAgICBcInR5cGVzXCI6IFwiLi9kaXN0L2luZGV4LmQudHNcIixcbiAgICBcImV4cG9ydHNcIjoge1xuICAgICAgXCIuXCI6IHtcbiAgICAgICAgXCJpbXBvcnRcIjoge1xuICAgICAgICAgIFwidHlwZXNcIjogXCIuL2Rpc3QvaW5kZXguZC50c1wiLFxuICAgICAgICAgIFwiZGVmYXVsdFwiOiBcIi4vZGlzdC9pbmRleC5tanNcIlxuICAgICAgICB9LFxuICAgICAgICBcInJlcXVpcmVcIjoge1xuICAgICAgICAgIFwidHlwZXNcIjogXCIuL2Rpc3QvaW5kZXguZC50c1wiLFxuICAgICAgICAgIFwiZGVmYXVsdFwiOiBcIi4vZGlzdC9pbmRleC5janNcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCIuLypcIjogXCIuL2Rpc3QvKlwiXG4gICAgfVxuICB9XG59Il0sCiAgIm1hcHBpbmdzIjogIjtBQUFrVSxTQUFTLGVBQWU7QUFDMVYsT0FBTyxVQUFVO0FBQ2pCLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sU0FBUztBQUNoQixTQUFTLG1CQUFtQjtBQUM1QixPQUFPLFNBQVM7OztBQ0x1UixTQUFTLGVBQWU7QUFHL1QsU0FBUyxlQUFlOzs7QUNIc1IsSUFBTSxlQUFlLENBQ2pVLE9BQ0EsaUJBQTJCLENBQUMsTUFDekI7QUFDSCxRQUFNLFdBQVcsQ0FBQyxHQUFHLGdCQUFnQixnQkFBZ0IsUUFBUSxnQkFBZ0I7QUFDN0UsU0FBTyxNQUFNO0FBQUEsSUFDWCxDQUFDLFNBQVMsQ0FBQyxTQUFTLEtBQUssQ0FBQyxZQUFZLEtBQUssU0FBUyxPQUFPLENBQUM7QUFBQSxFQUM5RDtBQUNGOzs7QUNSQTtBQUFBLEVBQ0UsTUFBUTtBQUFBLEVBQ1IsYUFBZTtBQUFBLEVBQ2YsU0FBVztBQUFBLEVBQ1gsTUFBUTtBQUFBLEVBQ1IsU0FBVztBQUFBLElBQ1QsT0FBUztBQUFBLEVBQ1g7QUFBQSxFQUNBLGtCQUFvQjtBQUFBLElBQ2xCLEtBQU87QUFBQSxFQUNUO0FBQUEsRUFDQSxjQUFn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
