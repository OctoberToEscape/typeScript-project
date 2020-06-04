import {
	Alert,
	Card,
	Container,
	Header,
	Aside,
	Dialog,
	Dropdown,
	DropdownMenu,
	DropdownItem,
	Main,
	Input,
	Button,
	Menu,
	Submenu,
	MenuItem,
	MenuItemGroup,
	Table,
	TableColumn,
	Form,
	FormItem,
	RadioGroup,
	RadioButton,
	Select,
	Option,
	Pagination,
	Tooltip,
	Tag,
	Tree,
	Icon,
	Row,
	Col,
	Message,
	MessageBox,
	Upload,
	Loading,
	DatePicker,
	Switch,
	CheckboxGroup,
	Checkbox,
	Radio,
	TimePicker,
	Badge,
	Tabs,
	TabPane,
	Link,
	Avatar,
	Steps,
	Step,
	Image,
	Notification,
	Collapse,
	CollapseItem,
} from "element-ui";

export default {
	install(Vue: any) {
		Vue.use(Steps);
		Vue.use(Step);
		Vue.use(Alert);
		Vue.use(Card);
		Vue.use(Container);
		Vue.use(Header);
		Vue.use(Aside);
		Vue.use(Dialog);
		Vue.use(Dropdown);
		Vue.use(DropdownMenu);
		Vue.use(DropdownItem);
		Vue.use(Main);
		Vue.use(Button);
		Vue.use(Menu);
		Vue.use(Submenu);
		Vue.use(MenuItem);
		Vue.use(MenuItemGroup);
		Vue.use(Table);
		Vue.use(TableColumn);
		Vue.use(Form);
		Vue.use(FormItem);
		Vue.use(RadioGroup);
		Vue.use(RadioButton);
		Vue.use(Select);
		Vue.use(Input);
		Vue.use(Option);
		Vue.use(Pagination);
		Vue.use(Tooltip);
		Vue.use(Tag);
		Vue.use(Tree);
		Vue.use(Icon);
		Vue.use(Row);
		Vue.use(Col);
		Vue.use(Upload);
		Vue.use(Loading);
		Vue.use(DatePicker);
		Vue.use(Switch);
		Vue.use(CheckboxGroup);
		Vue.use(Checkbox);
		Vue.use(Radio);
		Vue.use(TimePicker);
		Vue.use(Badge);
		Vue.use(Tabs);
		Vue.use(TabPane);
		Vue.use(Link);
		Vue.use(Avatar);
		Vue.use(Image);
		Vue.use(Collapse);
		Vue.use(CollapseItem);
		Vue.prototype.$message = Message;
		Vue.prototype.$alert = MessageBox.alert;
		Vue.prototype.$confirm = MessageBox.confirm;
		Vue.prototype.$notify = Notification;
	},
};