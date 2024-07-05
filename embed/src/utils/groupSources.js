function stripUrl (url) {
    return url.replace('link://', '')
}

function groupSources (sources) {

     const groupedSources = sources.map(
        (source, index) => {
            const strippedUrl = stripUrl(source.chunkSource);
            const domainName = strippedUrl.split('/')[2]

            return {
                url: strippedUrl,
                domain: domainName
            }
        }
    )

    return groupedSources
}

export default groupSources;