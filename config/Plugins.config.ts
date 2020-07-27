//引入
const CompressionPlugin = require("compression-webpack-plugin");
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i;
const IS_PROD = ["production", "prod"].includes(process.env.NODE_ENV);
module.exports = {
    chainWebpack: (config: any) => {
        config.plugin('CompressionPlugin').use(new CompressionPlugin({
            filename: "[path].gz[query]",
            algorithm: "gzip",
            test: productionGzipExtensions,
            // 只处理大于xx字节 的文件，默认：0
            threshold: 10240,
            // 示例：一个1024b大小的文件，压缩后大小为768b，minRatio : 0.75
            minRatio: 0.8, // 默认: 0.8
            // 是否删除源文件，默认: false
            deleteOriginalAssets: false
        }));
        config.merge({
            optimization: {
                minimize: true,
                splitChunks: {
                    chunks: 'all',
                    minSize: 30000,
                    minChunks: 3,
                    automaticNameDelimiter: '.',
                    cacheGroups: {
                        vendor: {
                            name: 'vendors',
                            test({ resource }) {
                                return /[\\/]node_modules[\\/]/.test(resource);
                            },
                            priority: 10,
                        },
                    },
                },
            }
        });
    }, extraBabelPlugins: [
        IS_PROD ? 'transform-remove-console' : ""
    ],
}