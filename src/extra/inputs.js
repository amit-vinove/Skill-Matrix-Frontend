import React, { useEffect, useState } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import SendIcon from '@mui/icons-material/Send';


function InputBox(){

    const [inputFields, setInputFields] = useState([
        { firstName: '', lastName: '' },
      ]);
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("InputFields", inputFields);
      };
    
      const handleChangeInput = (index, event) => {
        const values = [...inputFields]
        console.log(values)
        values[index][event.target.name] = event.target.value;
        setInputFields(values);
      }
    
      const handleAddFields = () => {
        setInputFields([...inputFields, { firstName: '', lastName: '' }])
      }
    
      const handleRemoveFields = (index) => {
        const values  = [...inputFields];
        values.splice(index, 1);
        setInputFields(values);
      }

    return(
        <>
    <h1>Dynamic Input Box</h1>
      <form onSubmit={handleSubmit}>
        { inputFields.map((inputField,index) => (
                <Card sx={{ minWidth: 275 }} key={index} style={{  backgroundColor: '#e7ebf0' , marginBottom:'20px'}}>
                <CardContent>
          <div>
            <TextField  style={{marginRight:'20px'}}
              name="firstName"
              label="First Name"
              variant="standard"
              value={inputField.firstName}
              onChange={event => handleChangeInput(index, event)}
            />
            <TextField
              name="lastName"
              label="Last Name"
              variant="standard"
              value={inputField.lastName}
              onChange={event => handleChangeInput(index, event)}
            />

            <IconButton disabled={inputFields.length === 1} onClick={()=>handleRemoveFields()}>
              <RemoveIcon />
            </IconButton>

            <IconButton
              onClick={()=>handleAddFields()}
            >
              <AddIcon />
            </IconButton>
          </div>
          </CardContent>
          </Card>
        )) }
        <Button
          variant="contained" 
          color="primary" 
          type="submit" 
          // endIcon={<Icon>send</Icon>}
          onClick={handleSubmit}
        >Send  <SendIcon style={{ fontSize:'20px' }}/> </Button>
      </form>
        </>
    )
}

export default InputBox