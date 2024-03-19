/* import DocumentoVisor from "@/components/actions/documentoVisor/documentoVisor"; */
import ProductDetail from "@/components/ProductDetail";
import fetchArticles, { fetchProductById } from "@/services/Articles";

export const dynamicParams = false;

type Params = {
    id: string;
}

type Props = {
    params: Params;
}
export const generateStaticParams = async (): Promise<Params[]> => {
    // Simplemente devuelve el resultado de fetchArticles, ya que parece que retorna un array de objetos con una propiedad "id"
    const res = await fetchArticles();

    // Mapea los resultados para construir un array de objetos Params
    const params: Params[] = res.map((item: any) => ({ id: item.id.toString() }));

    return params;
}

export default async function PageProductDetail(props: Props) {
    console.log(props.params.id)
    return (
        <ProductDetail idParams={props.params.id} />
    );
}
