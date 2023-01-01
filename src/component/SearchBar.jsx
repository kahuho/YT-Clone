import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import {Search} from "@mui/icons-material";
import { borderRadius } from "@mui/system";

const SearchBar = () =>{
    return (
        <Paper
            component = "form"
            onSubmit = { () => {}}
            sx = {{
                borderRadius: 20,
                border: '1 px solid #e3e3e3',
                pl: 2,
                mr: {sm: 5},
            }}
        >
            <input 
                className="search-bar"
                placeholder="Search..."
                value=""
                onChange = {() => {}}
            />
            <IconButton type="submit" sx={{p: '1-px', color:'red'}}>
                <Search/>
            </IconButton>
        </Paper>
    );
}
export default SearchBar;