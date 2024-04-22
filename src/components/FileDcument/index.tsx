import { Document, Page, View, Text, Image } from "@react-pdf/renderer";
import React, { FC } from "react";
import { IDocument } from "./types";

interface IDocumentProps {
    document: IDocument;
}

const  MyDocument: FC<IDocumentProps> = ({document:{ name, picture}}) => {
    return (
        <Document>
            <Page size="A4"  wrap>
                <View>
                    <Text>Section #1</Text>
                </View>
                <View >
                    <Text>{name}</Text>
                </View>

                <View >
                    {picture && <Image src={picture} />}
                    </View>
            </Page>
        </Document>
    )
}

export default MyDocument