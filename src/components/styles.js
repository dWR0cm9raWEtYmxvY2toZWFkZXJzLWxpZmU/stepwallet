
//


const styles = theme =>({
    ctn:{
	display:'flex',
	flex:1,
	flexDirection:'column',
	height:'100vh',
	width:'100vw',
	borderWidth:1,
	borderColor:'#000',
	borderStyle: 'solid'
    },
    row: {
	display: 'flex',
	justifyContent: 'center',
	alignItems:'center',
	borderWidth:0,
	borderBottomWidth:1,
	borderStyle:'solid',
	borderColor:'#000',
	flexDirection:'column',
    },
    avatar: {
	display:'flex',
	justifyContent:'center',
	alignItems:'center',
	margin: 8 * theme.spacing.unit,	
    },
    bigAvatar: {
	width: 60,
	height: 60,
    },
    bottom:{
	display:'flex',
	alignItems:'center',
	justifyContent:'space-between',
    },
    edge:{
	marginLeft: 2*theme.spacing.unit,
	marginRight: 2*theme.spacing.unit
    },
    tools:{
	display: 'flex',
	justifyContent: 'space-around',
	alignItems:'center',
	borderWidth:0,
	borderBottomWidth:1,
	borderStyle:'solid',
	borderColor:'#000',
	flexDirection:'row',
	paddingTop: 3 * theme.spacing.unit,
	paddingBottom: 3 * theme.spacing.unit
    },
    tool:{
	width:36,
	height:36
    }
})

export default styles
