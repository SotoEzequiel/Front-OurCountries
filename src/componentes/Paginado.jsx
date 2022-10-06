import React from "react";
import estilos from "../style/paginado.module.css"


export default function Paginado({ paginado, allCountries, currentPage}) {

    let pageNumber = []

    for (let i = 0; i < allCountries / 22; i++) {
        pageNumber.push(i + 1)
    }
    return (
        <nav className={estilos.nav}>
            {pageNumber &&
                pageNumber.map((number) => {
                    if (currentPage === number)
                        return (
                            <p
                                className={estilos.selected}
                                key={number}
                                onClick={() => paginado(number)}
                            >
                                {number}
                            </p>
                        );
                    else
                        return (
                            <p key={number} className={estilos.notSelected} onClick={() => paginado(number)}>
                                {number}
                            </p>
                        );
                })}

        </nav>
    )

}