import styles from "/style/index.module.css"

export default function IndexPage() {
    return (<>
        <h2 className={styles.title}>News</h2>
        <div className={styles.news}>
            <div className={styles.src}>
                <h4>Die beste Enduro Maschiene</h4>
                <img src="/enduro_motorrad.jpg" alt="" width={320}/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ipsa voluptate impedit ullam! Distinctio sint non, iusto cumque repellat culpa sit adipisci! At modi sit amet cupiditate corrupti, sequi blanditiis animi ipsum vel architecto ut ducimus corporis velit quia fugit eos atque aut autem sapiente id nostrum doloremque magnam. Aperiam.</p>
            </div>
            <div className={styles.src}>
                <h4>Verspiegelte Visiere</h4>
                <img src="/agv_helmet.jpg" alt="" width={320}/>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora eveniet iusto quis animi quaerat veritatis quibusdam voluptatum tempore aperiam, ex, velit beatae, fugiat harum temporibus omnis deleniti eligendi provident nemo maiores. Officia optio voluptas, recusandae id aliquid vel repellat vitae ex atque amet laboriosam harum consectetur rerum ipsam? Modi, fugiat.</p>
            </div>
            <div className={styles.src}>
                <h4>Harley Davidson</h4>
                <img src="/harley-davidson.jpg" alt="" width={320}/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta vel a praesentium eum. Quisquam minus, deleniti cupiditate, rem esse ratione aliquam rerum quis reprehenderit doloribus quaerat voluptates temporibus harum dignissimos perferendis aspernatur illo expedita laboriosam ad, cumque nisi enim veritatis est maxime. Minus vero illum, esse excepturi id rerum quos.</p>
            </div>
        </div>
        <h2 className={styles.title}>Tipps & Tricks</h2>
        <h2 className={styles.title}>Events</h2>
    </>)
}
