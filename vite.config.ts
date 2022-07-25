import {defineConfig} from "vite"
import react from "@vitejs/plugin-react"
import {visualizer} from "rollup-plugin-visualizer"
import {resolve} from "path"
import {createSvgIconsPlugin} from "vite-plugin-svg-icons"

export default defineConfig({
    resolve: {
        alias: [
            {find: "@", replacement: resolve(__dirname, "src")}
        ]
    },
    plugins: [
        react(),
        createSvgIconsPlugin({
            iconDirs: [resolve(process.cwd(), "src/icons")],
            symbolId: "icon-[name]"
        }),
        visualizer(),
    ]
})
