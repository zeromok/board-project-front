import Button from '@mui/material/Button';




const Header = () => {
    
    const click = () => {
        alert('글쓰기 버튼 클릭');
    }
    
    return(
    <>
    <h1>board-project-front</h1>
    <Button onClick={click} variant="contained" color="info" >글쓰기</Button>
    </>
    )
};

export default Header;