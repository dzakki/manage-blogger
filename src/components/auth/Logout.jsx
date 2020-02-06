import React from 'react';
import { useDispatch } from 'react-redux';
import {  logout } from '../../store/actions/user';
import { Button } from 'react-bootstrap';

export default function Logout() {
    const dispatch = useDispatch()
    const respLogout = () => {
        dispatch(logout())
    }
    return (
        <Button variant="outline-light" size="sm" onClick={respLogout}  className="text-dark">
            Logout
        </Button>
    )
    
}