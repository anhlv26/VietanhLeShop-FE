import { Badge, Box, Button, Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const HeaderComponent = () => {
  const headerHeight = "80px";
  return (
    <Box sx={{ width: "100%", padding: "0 72px" }}>
      <Grid
        container
        sx={{
          height: headerHeight,
          width: "100%",
        }}
      >
        <Grid
          item
          md={1}
          sx={{
            height: "100%",
            lineHeight: headerHeight,
          }}
        >
          VANH
        </Grid>
        <Grid
          item
          md={8}
          sx={{
            height: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Paper
            component="form"
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              height: 40,
              border: "1px solid #e5e5e5",
              boxShadow: "none",
              borderRadius: "6px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                paddingLeft: "20px",
              }}
            >
              <SearchIcon sx={{ fontWeight: "400", opacity: "0.5" }} />
            </Box>
            <InputBase
              sx={{ ml: 1, flex: 1, fontWeight: "400" }}
              placeholder="100% hàng tuyển chọn"
              inputProps={{ "aria-label": "search google maps" }}
            />
            <Divider sx={{ height: 28, ml: 0.5 }} orientation="vertical" />
            <Button
              color="primary"
              sx={{
                fontSize: "14px",
                height: "100%",
              }}
            >
              Tìm kiếm
            </Button>
          </Paper>
        </Grid>
        <Grid
          item
          md={3}
          sx={{
            height: "100%",
            lineHeight: headerHeight,
            paddingLeft: "60px",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <Button
            sx={{
              borderRadius: "6px",
            }}
            startIcon={<HomeIcon sx={{ fontSize: "30px !important" }} />}
          >
            Trang chủ
          </Button>
          <Button
            sx={{ borderRadius: "6px" }}
            startIcon={<EmojiEmotionsIcon />}
          >
            Tài khoản
          </Button>
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <Button sx={{ borderRadius: "6px" }}>
            <Badge
              badgeContent={2}
              color="primary"
              sx={{
                "& .MuiBadge-badge": {
                  fontSize: "10px",
                  maxWidth: 12,
                  height: "16px",
                  borderRadius: "16px",
                },
              }}
            >
              <ShoppingCartIcon />
            </Badge>
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeaderComponent;
