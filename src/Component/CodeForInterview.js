import { Box,makeStyles } from "@material-ui/core";
import ReactImg from '../Asset/Image/react_img.png';
import MaterialUi from '../Asset/Image/materialUI.png';
const CodeForInterview=()=>{
    const usestyle=makeStyles({
        image:{
            width:'45%',
            height:'50%'
        },
        image1:{
            width:'55%',
            height:'70%'
        }
    })
    const classes=usestyle();
    return(
        // <div>
        //     <p>Hi from Home Page Code For Interview</p>
        // </div>
        <Box style={{display:'flex'}}>
            <img className={classes.image} src={ReactImg}></img>
            <img className={classes.image1} src={MaterialUi}></img>
        </Box>
    );
}
export default CodeForInterview;