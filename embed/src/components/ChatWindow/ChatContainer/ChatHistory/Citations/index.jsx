import { ArrowSquareOut } from "@phosphor-icons/react";
import groupSources from '@/utils/groupSources';
import { mappings } from '@/utils/mappings';

const FilenameToLink = ({ filename }) => {
    if (Object.keys(mappings).includes(filename)) {
        const pair = mappings[filename]
        const href = pair[0] || '#'
        const text = pair[1] || filename

        return <li><a href={href} target="_blank" className="hover:allm-opacity-80">{text}</a><ArrowSquareOut className="allm-h-4 allm-w-4 allm-ml-2 allm-inline-block" /></li>
    }

    return <li>{filename}</li>
}

export const Citations = ({ sources }) => {
    console.log(sources)
    if (!sources) return null;
    if (sources.length === 0) return null;
    
    const groupedSources = groupSources(sources)
    if (!groupedSources) return null;
    if (groupedSources.length === 0) return null;

    return (<>
        <hr />
        <span className="allm-text-sm">Souces:</span>
        <ul className="allm-flex allm-flex-col allm-text-sm allm-list-outside">{
            groupedSources.map((source) => {
                if (source.domain === 'file') {
                    return (
                        <FilenameToLink filename={source.url} />
                    )
                } else {
                    return (
                        <li>
                            <a href={source.url} target="_blank" className="hover:allm-opacity-80">
                            {source.domain}
                            </a>
                            <ArrowSquareOut className="allm-h-4 allm-w-4 allm-ml-2 allm-inline-block" />
                        </li>
                    );
                }
                
            })
        }</ul>
        </>
    );
}