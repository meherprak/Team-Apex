export default function DashboardLayout({
    children,
    users,
    notifications,
    revenue
}:{children:React.ReactNode;
    users:React.ReactNode;
    notifications:React.ReactNode;
    revenue:React.ReactNode;

})
{
    return (
        <>
        
            {children}
            {users}
            {notifications}
            {revenue}
        
        </>
    )
}