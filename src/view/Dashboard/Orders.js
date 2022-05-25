import * as React from 'react';
import MUIDataTable from "mui-datatables";
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, data, cliente, descricao, valorRecibo, formaPagamento, instrutor) {
    return [id, data, cliente, descricao,  valorRecibo, formaPagamento, instrutor ];
}

const colunas = ["Número", "Data", "Cliente", "Descrição", "Valor", "Forma de Pagamento", "Instrutor"]

const rows = [
    createData(
        0,
        '16 Mar, 2019',
        'Elvis Presley',
        '7 aulas de carro',
        312.44,
        'VISA ⠀•••• 3719',
        "Alexandre"
    ),
    createData(
        1,
        '16 Mar, 2019',
        'Paul McCartney',
        'Pacote total para habilitação de moto (A)',
        1650,
        'VISA ⠀•••• 2574',
        "Daniel"
    ),
    createData(
        2,
        '16 Mar, 2019',
        'Tom Scholz',
        '2 aulas',
        100.81,
        'MC ⠀•••• 1253',
        "Manoel"
    ),

    createData(
        3,
        '16 Mar, 2019',
        'Michael Jackson',
        'Curso de legislação',
        654.39,
        'AMEX ⠀•••• 2000',
        "Severo"
    ),
    createData(
        4,
        '15 Mar, 2019',
        'Bruce Springsteen',
        'Marcação e aluguel do carro',
        212.79,
        'VISA ⠀•••• 5919',
        "Viviane",
    ),
];


export default function Orders() {
    return (
        <MUIDataTable
            title={<p style={{color:"#1976d2", fontWeight: "500", fontSize: "1.25rem"}}>Recibos</p>}
            data={rows}
            columns={colunas}
            options={{
                download: false,
                rowsPerPage: 15,
                rowsPerPageOptions: [15, 30, 50],
                selectableRowsHeader: false,
                textLabels: {
                    body: {
                        noMatch: "Nenhum registro encontrado",
                        toolTip: "Ordenar",

                    },
                    pagination: {
                        next: "Próxima página",
                        previous: "Página anterior",
                        rowsPerPage: "Linhas por página:",
                        displayRows: "de",
                    },
                    toolbar: {
                        search: "Pesquisar",
                        downloadCsv: "Download CSV",
                        print: "Imprimir",
                        viewColumns: "Vusualizar colunas",
                        filterTable: "Filtrar tabela",
                    },
                    filter: {
                        all: "Todos",
                        title: "FILTROS",
                        reset: "LIMPAR",
                    },
                    viewColumns: {
                        title: "Mostrar colunas",
                        titleAria: "Show/Hide Table Columns",
                    },
                    selectedRows: {
                        text: "linha(s) selecionada(s)",
                        delete: "Apagar registro",
                        deleteAria: "Delete Selected Rows",
                    },
            }}}
        />

        // <React.Fragment>
        //     <Title>Recibos</Title>
        //     <Table size="medium">
        //         <TableHead>
        //             <TableRow>
        //                 <TableCell>Número</TableCell>
        //                 <TableCell>Data</TableCell>
        //                 <TableCell>Cliente</TableCell>
        //                 <TableCell>Valor</TableCell>
        //                 <TableCell>Descrição</TableCell>
        //                 <TableCell>Forma de Pagamento</TableCell>
        //                 <TableCell>Instrutor</TableCell>
        //
        //             </TableRow>
        //         </TableHead>
        //         <TableBody>
        //             {rows.map((row) => (
        //                 <TableRow key={row.id}>
        //                     <TableCell>{row.id}</TableCell>
        //                     <TableCell>{row.data}</TableCell>
        //                     <TableCell>{row.cliente}</TableCell>
        //                     <TableCell>{`R$${row.valorRecibo}`}</TableCell>
        //                     <TableCell>{row.descricao}</TableCell>
        //                     <TableCell>{row.formaPagamento}</TableCell>
        //                     <TableCell>{row.instrutor}</TableCell>
        //
        //                 </TableRow>
        //             ))}
        //         </TableBody>
        //     </Table>
        //     <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        //         See more orders
        //     </Link>
        // </React.Fragment>
    );
}