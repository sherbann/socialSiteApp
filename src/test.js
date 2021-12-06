<CardGroup>
    <Card className=" text-center mt-2" >
        <Card.Header as="h4" style={{ backgroundColor: 'lightgreen' }}>{this.props.id}</Card.Header>
        <Image fluid className="mx-auto" src={this.props.img} alt={this.props.alt} />
        <Card.Body >
            <Card.Text style={{ backgroundColor: 'lightblue' }}>{this.props.text}</Card.Text>
            <Image onClick={() => this.clickHandler()}
                fluid className="mx-auto" src={LikeIcon}
                width="25px" alt="like logo" />

            {this.props.no}

            <Button onClick={() => this.removeHandler()}
                fluid className="mx-auto"
                width="25px" variant="danger" >Remove Post</Button>
        </Card.Body>
    </Card>
</CardGroup>