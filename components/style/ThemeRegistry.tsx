"use client"

import createCache from "@emotion/cache";
import {darkTheme} from "@/components/style/theme";
import {useState} from "react";
import {useServerInsertedHTML} from "next/navigation";
import {CacheProvider} from "@emotion/react";
import {ThemeProvider} from "@mui/system";
import {CssBaseline} from "@mui/material";
import createEmotionServer from "@emotion/server/create-instance";


function createEmotionCache() {
    return createCache({ key: 'mui', prepend: true });
}

export default function ThemeRegistry({
                                          children,
                                          theme = darkTheme,
                                      }: {
    children: React.ReactNode;
    theme?: any;
}) {
    const [cache] = useState(() => createEmotionCache());
    const { extractCriticalToChunks, constructStyleTagsFromChunks } = createEmotionServer(cache);

    useServerInsertedHTML(() => {
        const chunks = extractCriticalToChunks('');
        return (
            <style
                data-emotion={`${cache.key} ${chunks.styles.map((style) => style.key).join(' ')}`}
                dangerouslySetInnerHTML={{ __html: constructStyleTagsFromChunks(chunks) }}
            />
        );
    });

    return (
        <CacheProvider value={cache}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </CacheProvider>
    );
}