export default function Avatar({ users }) {
	return users.map((user,index) => (
		<>
			<span className='-ml-2 border-2 border-white rounded-full' key={index}>
				<img
					src={user.avatar}
					alt={`${user.name} profile image`}
					className='object-cover w-6 h-6 rounded-full'
				/>
			</span>
			<span className='sr-only'>{user.name}</span>
		</>
	));
}
