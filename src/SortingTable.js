import React, { useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { books } from './books.js';
import { ArrowDown, ArrowUp } from 'react-feather';

function SortingTable() {  
    const [bookList, setBookList] = useState(books);
    const [sorted, setSorted] = useState();
    const [iconChange, setIconChange] = useState();
    
    function sortByPublish() {
        setSorted(!sorted); 
        
        bookList.sort((a,b) =>  sorted ? b.publish - a.publish : a.publish - b.publish)
        setIconChange(sorted ? <ArrowDown size={15}/> : <ArrowUp size={15}/>);
    }
    
    function sortByTitle() {
        setSorted(!sorted); 

        if (sorted) {
            bookList.sort((a,b) =>  a.title > b.title ? -1 : 1)
        } else {
            bookList.sort((a,b) => a.title > b.title ? 1 : -1)
        }

        setIconChange(sorted ? <ArrowDown size={15}/> : <ArrowUp size={15}/>);
    }

    return (
        <TableContainer>
            <Table style={{ width: '50%'}}>
                <TableHead>
                    <TableCell onClick={sortByTitle}>
                        Title {iconChange}
                    </TableCell>
                    <TableCell onClick={sortByPublish}>
                        Publish {iconChange}
                    </TableCell>
                </TableHead>
                <TableBody>
                    {bookList.map((book) => (
                        <TableRow>
                            <TableCell>{book.title}</TableCell>
                            <TableCell>{book.publish}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default SortingTable