function GiftDetails() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [giftData, setGiftData] = useState({
      _id: "",
      name: "",
      description: "",
      skillLevel: "",
      price: "",
      supplies: [],
      instructions: [],
      imageUrl: "",
      video: "",
    });
    const params = useParams();
  
    useEffect(() => {
      async function fetchGift() {
        try {
          const response = await axios.get(
            `https://ironrest.herokuapp.com/gift/${params.id}`
          );
          setGiftData({ ...response.data });
          setLoading(false);
        } catch (err) {
          console.log(err);
        }
      }
  
      fetchGift();
    }, [params.id]);
  
    async function handleDelete(id) {
      try {
        await axios.delete(`https://ironrest.herokuapp.com/gift/${id}`);
        navigate("/giftslist");
      } catch (err) {
        console.error(err);
      }
    }