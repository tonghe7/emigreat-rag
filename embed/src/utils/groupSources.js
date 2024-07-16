function stripUrl (url) {
    if (!url) {
        return ''
    } else if (url.startsWith('file')) {
        return url
    }
    return url.replace('link://', '')
}

function groupSources (sources) {
    console.log("groupSources is called")
    console.log(sources)

    if (!sources) {
        return []
    }

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